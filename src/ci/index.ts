import { Capi } from '@tencent-sdk/capi';
import {
  CodingCIInterface,
  CreateCodingCIJobResponse,
  CreateProjectWithTemplateResponse,
  TriggerCodingCIBuildResponse,
  DescribeCodingCIBuildResponse,
  DescribeCodingCIBuildStageResponse,
  DescribeCodingCIBuildLogResponse,
  CodingCIOptions,
  CreateProjectWithTemplateOptions,
  CreateCodingCIJobOptions,
  TriggerCodingCIBuildOptions,
} from '../typings/ci';
import {
  createProjectWithTemplateReq,
  createCodingCIJobReq,
  triggerCodingCIBuildReq,
  describeCodingCIBuildReq,
  describeCodingCIBuildStageReq,
  describeCodingCIBuildLogReq,
} from './actions';

import { request } from '../apis';

class CodingCI implements CodingCIInterface {
  capi: Capi;
  constructor({ secretId, secretKey, token, region = 'ap-guangzhou' }: CodingCIOptions) {
    this.capi = new Capi({
      SecretId: secretId,
      SecretKey: secretKey,
      Token: token,
      Region: region,
      ServiceType: 'coding',
      Version: '2019-10-21',
      SignatureMethod: 'sha256',
    });
  }
  /* *********************************
   * @api CreateProjectWithTemplate
   */
  async createProjectWithTemplate({
    name,
    alias,
    description,
    options = {},
  }: CreateProjectWithTemplateOptions): Promise<CreateProjectWithTemplateResponse> {
    const req = createProjectWithTemplateReq({
      name,
      alias,
      description,
      options,
    });
    const res = await request(this.capi, {
      Action: 'CreateProjectWithTemplate',
      ...req,
    });
    return res;
  }

  async createCodingCIJob({
    jobName,
    projectId,
    depotId,
    envs = [],
    parseOptions,
    needDeployLayer,
  }: CreateCodingCIJobOptions): Promise<CreateCodingCIJobResponse> {
    const req = createCodingCIJobReq({
      jobName,
      projectId,
      depotId,
      envs,
      parseOptions,
      needDeployLayer,
    });
    const res = await request(this.capi, {
      Action: 'CreateCodingCIJob',
      ...req,
    });
    return res;
  }

  async triggerCodingCIBuild({
    jobId,
    envs = [],
  }: TriggerCodingCIBuildOptions): Promise<TriggerCodingCIBuildResponse> {
    const req = triggerCodingCIBuildReq({
      jobId,
      envs,
    });
    const res = await request(this.capi, {
      Action: 'TriggerCodingCIBuild',
      ...req,
    });
    return res;
  }

  async describeCodingCIBuild(buildId: number): Promise<DescribeCodingCIBuildResponse> {
    const req = describeCodingCIBuildReq(buildId);
    const res = await request(this.capi, {
      Action: 'DescribeCodingCIBuild',
      ...req,
    });
    return res;
  }

  async describeCodingCIBuildStage(buildId: number): Promise<DescribeCodingCIBuildStageResponse> {
    const req = describeCodingCIBuildStageReq(buildId);
    const res = await request(this.capi, {
      Action: 'DescribeCodingCIBuildStage',
      ...req,
    });
    return res;
  }

  async describeCodingCIBuildLog(
    buildId: number,
    start = 0,
  ): Promise<DescribeCodingCIBuildLogResponse> {
    const req = describeCodingCIBuildLogReq(buildId, start);
    const res = await request(this.capi, {
      Action: 'DescribeCodingCIBuildLog',
      ...req,
    });
    return res;
  }
}

export { CodingCI };