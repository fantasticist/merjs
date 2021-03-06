// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "ibc/core/commitment/v1/commitment.proto" (package "ibc.core.commitment.v1", syntax proto3)
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
import { CommitmentProof } from "../../../../proofs";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 *
 * @generated from protobuf message ibc.core.commitment.v1.MerkleRoot
 */
export interface MerkleRoot {
    /**
     * @generated from protobuf field: bytes hash = 1;
     */
    hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 *
 * @generated from protobuf message ibc.core.commitment.v1.MerklePrefix
 */
export interface MerklePrefix {
    /**
     * @generated from protobuf field: bytes key_prefix = 1;
     */
    keyPrefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 *
 * @generated from protobuf message ibc.core.commitment.v1.MerklePath
 */
export interface MerklePath {
    /**
     * @generated from protobuf field: repeated string key_path = 1;
     */
    keyPath: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 *
 * @generated from protobuf message ibc.core.commitment.v1.MerkleProof
 */
export interface MerkleProof {
    /**
     * @generated from protobuf field: repeated ics23.CommitmentProof proofs = 1;
     */
    proofs: CommitmentProof[];
}
// @generated message type with reflection information, may provide speed optimized methods
class MerkleRoot$Type extends MessageType<MerkleRoot> {
    constructor() {
        super("ibc.core.commitment.v1.MerkleRoot", [
            { no: 1, name: "hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ], { "gogoproto.goproto_getters": false });
    }
    create(value?: PartialMessage<MerkleRoot>): MerkleRoot {
        const message = { hash: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MerkleRoot>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MerkleRoot): MerkleRoot {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes hash */ 1:
                    message.hash = reader.bytes();
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
    internalBinaryWrite(message: MerkleRoot, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes hash = 1; */
        if (message.hash.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.commitment.v1.MerkleRoot
 */
export const MerkleRoot = new MerkleRoot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MerklePrefix$Type extends MessageType<MerklePrefix> {
    constructor() {
        super("ibc.core.commitment.v1.MerklePrefix", [
            { no: 1, name: "key_prefix", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.moretags": "yaml:\"key_prefix\"" } }
        ]);
    }
    create(value?: PartialMessage<MerklePrefix>): MerklePrefix {
        const message = { keyPrefix: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MerklePrefix>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MerklePrefix): MerklePrefix {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes key_prefix */ 1:
                    message.keyPrefix = reader.bytes();
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
    internalBinaryWrite(message: MerklePrefix, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes key_prefix = 1; */
        if (message.keyPrefix.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.keyPrefix);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.commitment.v1.MerklePrefix
 */
export const MerklePrefix = new MerklePrefix$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MerklePath$Type extends MessageType<MerklePath> {
    constructor() {
        super("ibc.core.commitment.v1.MerklePath", [
            { no: 1, name: "key_path", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"key_path\"" } }
        ], { "gogoproto.goproto_stringer": false });
    }
    create(value?: PartialMessage<MerklePath>): MerklePath {
        const message = { keyPath: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MerklePath>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MerklePath): MerklePath {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string key_path */ 1:
                    message.keyPath.push(reader.string());
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
    internalBinaryWrite(message: MerklePath, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string key_path = 1; */
        for (let i = 0; i < message.keyPath.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.keyPath[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.commitment.v1.MerklePath
 */
export const MerklePath = new MerklePath$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MerkleProof$Type extends MessageType<MerkleProof> {
    constructor() {
        super("ibc.core.commitment.v1.MerkleProof", [
            { no: 1, name: "proofs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CommitmentProof }
        ]);
    }
    create(value?: PartialMessage<MerkleProof>): MerkleProof {
        const message = { proofs: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MerkleProof>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MerkleProof): MerkleProof {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ics23.CommitmentProof proofs */ 1:
                    message.proofs.push(CommitmentProof.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MerkleProof, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated ics23.CommitmentProof proofs = 1; */
        for (let i = 0; i < message.proofs.length; i++)
            CommitmentProof.internalBinaryWrite(message.proofs[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.commitment.v1.MerkleProof
 */
export const MerkleProof = new MerkleProof$Type();
