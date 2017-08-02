/* SystemJS module definition */

declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery {
  daterangepicker(options?: any, callback?: Function): any;
}
interface JQuery {
  peity(type?: any, options?: any ): any;
}
interface JQuery {
  datagrid(): JQuery;
  datagrid(methodName: string): any;
  datagrid(methodName: string, param: any): JQuery;
  datagrid(options?: any, param?: any): any;
}
interface JQuery {
  helloWorld();
}

