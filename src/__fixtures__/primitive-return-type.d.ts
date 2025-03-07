declare namespace google {
    /**
     * Methods available to Google Apps Script
     */
    namespace script {
        interface PublicEndpoints {
            [key: string]: (...args: any[])=>any;
            returnNumber(): number;
            returnString(): string;
            returnBoolean(): boolean;
            returnUndefined(): undefined;
            returnNull(): null;
        }




    }
}
