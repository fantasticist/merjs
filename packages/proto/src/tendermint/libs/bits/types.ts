// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "tendermint/libs/bits/types.proto" (package "tendermint.libs.bits", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message tendermint.libs.bits.BitArray
 */
export interface BitArray {
    /**
     * @generated from protobuf field: int64 bits = 1;
     */
    bits: string;
    /**
     * @generated from protobuf field: repeated uint64 elems = 2;
     */
    elems: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class BitArray$Type extends MessageType<BitArray> {
    constructor() {
        super("tendermint.libs.bits.BitArray", [
            { no: 1, name: "bits", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 2, name: "elems", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
    create(value?: PartialMessage<BitArray>): BitArray {
        const message = { bits: "0", elems: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BitArray>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BitArray): BitArray {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 bits */ 1:
                    message.bits = reader.int64().toString();
                    break;
                case /* repeated uint64 elems */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.elems.push(reader.uint64().toString());
                    else
                        message.elems.push(reader.uint64().toString());
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
    internalBinaryWrite(message: BitArray, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 bits = 1; */
        if (message.bits !== "0")
            writer.tag(1, WireType.Varint).int64(message.bits);
        /* repeated uint64 elems = 2; */
        if (message.elems.length) {
            writer.tag(2, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.elems.length; i++)
                writer.uint64(message.elems[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.libs.bits.BitArray
 */
export const BitArray = new BitArray$Type();
