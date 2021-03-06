// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "cosmos/crisis/v1beta1/tx.proto" (package "cosmos.crisis.v1beta1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * MsgVerifyInvariant represents a message to verify a particular invariance.
 *
 * @generated from protobuf message cosmos.crisis.v1beta1.MsgVerifyInvariant
 */
export interface MsgVerifyInvariant {
    /**
     * @generated from protobuf field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from protobuf field: string invariant_module_name = 2;
     */
    invariantModuleName: string;
    /**
     * @generated from protobuf field: string invariant_route = 3;
     */
    invariantRoute: string;
}
/**
 * MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type.
 *
 * @generated from protobuf message cosmos.crisis.v1beta1.MsgVerifyInvariantResponse
 */
export interface MsgVerifyInvariantResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class MsgVerifyInvariant$Type extends MessageType<MsgVerifyInvariant> {
    constructor() {
        super("cosmos.crisis.v1beta1.MsgVerifyInvariant", [
            { no: 1, name: "sender", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "invariant_module_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"invariant_module_name\"" } },
            { no: 3, name: "invariant_route", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"invariant_route\"" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<MsgVerifyInvariant>): MsgVerifyInvariant {
        const message = { sender: "", invariantModuleName: "", invariantRoute: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgVerifyInvariant>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgVerifyInvariant): MsgVerifyInvariant {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string sender */ 1:
                    message.sender = reader.string();
                    break;
                case /* string invariant_module_name */ 2:
                    message.invariantModuleName = reader.string();
                    break;
                case /* string invariant_route */ 3:
                    message.invariantRoute = reader.string();
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
    internalBinaryWrite(message: MsgVerifyInvariant, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string sender = 1; */
        if (message.sender !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.sender);
        /* string invariant_module_name = 2; */
        if (message.invariantModuleName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.invariantModuleName);
        /* string invariant_route = 3; */
        if (message.invariantRoute !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.invariantRoute);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.crisis.v1beta1.MsgVerifyInvariant
 */
export const MsgVerifyInvariant = new MsgVerifyInvariant$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgVerifyInvariantResponse$Type extends MessageType<MsgVerifyInvariantResponse> {
    constructor() {
        super("cosmos.crisis.v1beta1.MsgVerifyInvariantResponse", []);
    }
    create(value?: PartialMessage<MsgVerifyInvariantResponse>): MsgVerifyInvariantResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgVerifyInvariantResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgVerifyInvariantResponse): MsgVerifyInvariantResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MsgVerifyInvariantResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.crisis.v1beta1.MsgVerifyInvariantResponse
 */
export const MsgVerifyInvariantResponse = new MsgVerifyInvariantResponse$Type();
/**
 * @generated ServiceType for protobuf service cosmos.crisis.v1beta1.Msg
 */
export const Msg = new ServiceType("cosmos.crisis.v1beta1.Msg", [
    { name: "VerifyInvariant", options: {}, I: MsgVerifyInvariant, O: MsgVerifyInvariantResponse }
]);
