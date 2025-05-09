import type { Category } from '../../../constants';
import { DockerDatasource } from '../../datasource/docker';
import { HelmDatasource } from '../../datasource/helm';
export { updateArtifacts } from './artifacts';
export { extractPackageFile } from './extract';
export { bumpPackageVersion } from './update';

export const supportsLockFileMaintenance = true;

export const displayName = 'Helm v3';
export const url = 'https://helm.sh/docs';
export const categories: Category[] = ['helm', 'kubernetes'];

export const defaultConfig = {
  registryAliases: {
    stable: 'https://charts.helm.sh/stable',
  },
  commitMessageTopic: 'helm chart {{depName}}',
  managerFilePatterns: ['/(^|/)Chart\\.ya?ml$/'],
};

export const supportedDatasources = [DockerDatasource.id, HelmDatasource.id];
