import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UsuariosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Usuarios {
  readonly id: string;
  readonly nombres: string;
  readonly apellidos: string;
  readonly correo: string;
  readonly contrasena: string;
  readonly cuenta: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Usuarios, UsuariosMetaData>);
  static copyOf(source: Usuarios, mutator: (draft: MutableModel<Usuarios, UsuariosMetaData>) => MutableModel<Usuarios, UsuariosMetaData> | void): Usuarios;
}