import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SOUSCRIBERMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SOUSCRIBER {
  readonly id: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SOUSCRIBER, SOUSCRIBERMetaData>);
  static copyOf(source: SOUSCRIBER, mutator: (draft: MutableModel<SOUSCRIBER, SOUSCRIBERMetaData>) => MutableModel<SOUSCRIBER, SOUSCRIBERMetaData> | void): SOUSCRIBER;
}