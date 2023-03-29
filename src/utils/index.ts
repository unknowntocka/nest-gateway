import { readFileSync } from 'fs';
import * as path from 'path';
import { parse } from 'yaml';

export const getEnv = () => {
  return process.env.RUNNING_ENV;
};

export const getConfig = (type?: string) => {
  const environment = getEnv();
  const yamlPath = path.join(process.cwd(), `./.config/.${environment}.yaml`);
  const file = readFileSync(yamlPath, 'utf8');
  const config = parse(file);
  if (type) {
    return config[type];
  }
  return config;
};
