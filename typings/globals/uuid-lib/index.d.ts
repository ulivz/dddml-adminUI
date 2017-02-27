declare namespace uuidjs {
    interface iuuid{
        raw(): string
    }
}

declare var uuid: uuidjs.iuuid;

declare module "uuid-lib" {
    export = uuid;
}