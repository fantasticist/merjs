// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "merlion/gauge/v1/tx.proto" (package "merlion.gauge.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Msg } from "./tx";
/**
 * Msg defines the Msg service.
 *
 * @generated from protobuf service merlion.gauge.v1.Msg
 */
export interface IMsgClient {
}
/**
 * Msg defines the Msg service.
 *
 * @generated from protobuf service merlion.gauge.v1.Msg
 */
export class MsgClient implements IMsgClient, ServiceInfo {
    typeName = Msg.typeName;
    methods = Msg.methods;
    options = Msg.options;
    constructor(private readonly _transport: RpcTransport) {
    }
}