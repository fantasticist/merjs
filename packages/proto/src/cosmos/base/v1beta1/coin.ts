// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "cosmos/base/v1beta1/coin.proto" (package "cosmos.base.v1beta1", syntax proto3)
// tslint:disable
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
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 *
 * @generated from protobuf message cosmos.base.v1beta1.Coin
 */
export interface Coin {
    /**
     * @generated from protobuf field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from protobuf field: string amount = 2;
     */
    amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 *
 * @generated from protobuf message cosmos.base.v1beta1.DecCoin
 */
export interface DecCoin {
    /**
     * @generated from protobuf field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from protobuf field: string amount = 2;
     */
    amount: string;
}
/**
 * IntProto defines a Protobuf wrapper around an Int object.
 *
 * @generated from protobuf message cosmos.base.v1beta1.IntProto
 */
export interface IntProto {
    /**
     * @generated from protobuf field: string int = 1;
     */
    int: string;
}
/**
 * DecProto defines a Protobuf wrapper around a Dec object.
 *
 * @generated from protobuf message cosmos.base.v1beta1.DecProto
 */
export interface DecProto {
    /**
     * @generated from protobuf field: string dec = 1;
     */
    dec: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Coin$Type extends MessageType<Coin> {
    constructor() {
        super("cosmos.base.v1beta1.Coin", [
            { no: 1, name: "denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "amount", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Int" } }
        ], { "gogoproto.equal": true });
    }
    create(value?: PartialMessage<Coin>): Coin {
        const message = { denom: "", amount: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Coin>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Coin): Coin {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string denom */ 1:
                    message.denom = reader.string();
                    break;
                case /* string amount */ 2:
                    message.amount = reader.string();
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
    internalBinaryWrite(message: Coin, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string denom = 1; */
        if (message.denom !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.denom);
        /* string amount = 2; */
        if (message.amount !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.amount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.Coin
 */
export const Coin = new Coin$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DecCoin$Type extends MessageType<DecCoin> {
    constructor() {
        super("cosmos.base.v1beta1.DecCoin", [
            { no: 1, name: "denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "amount", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Dec" } }
        ], { "gogoproto.equal": true });
    }
    create(value?: PartialMessage<DecCoin>): DecCoin {
        const message = { denom: "", amount: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DecCoin>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DecCoin): DecCoin {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string denom */ 1:
                    message.denom = reader.string();
                    break;
                case /* string amount */ 2:
                    message.amount = reader.string();
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
    internalBinaryWrite(message: DecCoin, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string denom = 1; */
        if (message.denom !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.denom);
        /* string amount = 2; */
        if (message.amount !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.amount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.DecCoin
 */
export const DecCoin = new DecCoin$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IntProto$Type extends MessageType<IntProto> {
    constructor() {
        super("cosmos.base.v1beta1.IntProto", [
            { no: 1, name: "int", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Int" } }
        ]);
    }
    create(value?: PartialMessage<IntProto>): IntProto {
        const message = { int: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IntProto>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IntProto): IntProto {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string int */ 1:
                    message.int = reader.string();
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
    internalBinaryWrite(message: IntProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string int = 1; */
        if (message.int !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.int);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.IntProto
 */
export const IntProto = new IntProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DecProto$Type extends MessageType<DecProto> {
    constructor() {
        super("cosmos.base.v1beta1.DecProto", [
            { no: 1, name: "dec", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Dec" } }
        ]);
    }
    create(value?: PartialMessage<DecProto>): DecProto {
        const message = { dec: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DecProto>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DecProto): DecProto {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string dec */ 1:
                    message.dec = reader.string();
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
    internalBinaryWrite(message: DecProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string dec = 1; */
        if (message.dec !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.dec);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.DecProto
 */
export const DecProto = new DecProto$Type();
