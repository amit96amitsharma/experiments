
export class Role {
    id: string;
    code: string;
    key: string;
    status: string;
    type: string;
    timeStamp: Date;
    permissions: string[] = [];
    tncAccepted: boolean;

    constructor(obj?: any) {

        if (!obj) {
            return;
        }

        this.id = obj.id;
        this.key = obj.key;
        this.type = obj.type;
        this.tncAccepted = obj.tncAccepted;
        this.status = obj.status;
        this.timeStamp = obj.timeStamp;

        this.permissions = [];
        if (obj.permissions) {
            obj.permissions.forEach((permission) => {
                this.permissions.push(permission);
            });
        }
    }
}
