export default class ResponseUtils {
    public static messageFailure(message: string) {
        return {
            message: message,
            code: 'error'
        };
    }
    public static messageSuccess(message: any) {
        return {
            queryResult: message,
            code: 'success'
        };
    }
}
