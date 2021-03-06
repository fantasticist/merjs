// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "ibc/applications/interchain_accounts/host/v1/query.proto" (package "ibc.applications.interchain_accounts.host.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./host";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from protobuf message ibc.applications.interchain_accounts.host.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from protobuf message ibc.applications.interchain_accounts.host.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
    /**
     * params defines the parameters of the module.
     *
     * @generated from protobuf field: ibc.applications.interchain_accounts.host.v1.Params params = 1;
     */
    params?: Params;
}
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsRequest$Type extends MessageType<QueryParamsRequest> {
    constructor() {
        super("ibc.applications.interchain_accounts.host.v1.QueryParamsRequest", []);
    }
    create(value?: PartialMessage<QueryParamsRequest>): QueryParamsRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryParamsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsRequest): QueryParamsRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: QueryParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.applications.interchain_accounts.host.v1.QueryParamsRequest
 */
export const QueryParamsRequest = new QueryParamsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsResponse$Type extends MessageType<QueryParamsResponse> {
    constructor() {
        super("ibc.applications.interchain_accounts.host.v1.QueryParamsResponse", [
            { no: 1, name: "params", kind: "message", T: () => Params }
        ]);
    }
    create(value?: PartialMessage<QueryParamsResponse>): QueryParamsResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryParamsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsResponse): QueryParamsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ibc.applications.interchain_accounts.host.v1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: QueryParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ibc.applications.interchain_accounts.host.v1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.applications.interchain_accounts.host.v1.QueryParamsResponse
 */
export const QueryParamsResponse = new QueryParamsResponse$Type();
/**
 * @generated ServiceType for protobuf service ibc.applications.interchain_accounts.host.v1.Query
 */
export const Query = new ServiceType("ibc.applications.interchain_accounts.host.v1.Query", [
    { name: "Params", options: { "google.api.http": { get: "/ibc/apps/interchain_accounts/host/v1/params" } }, I: QueryParamsRequest, O: QueryParamsResponse }
]);
