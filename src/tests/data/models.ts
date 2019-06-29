import { generate } from 'randomstring';

import * as Models from '../../models';

export const generateHistoryModel = (): Models.IHistoryModel => ({
  user: generate(20),
  sitecode: generate(20),
  timestamp: generate(20),
});

export const generateHistoryModels = (): Models.IHistoryModel[] => ([{
  user: generate(20),
  sitecode: generate(20),
  timestamp: generate(20),
}]);
