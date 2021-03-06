// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "ibc/lightclients/tendermint/v1/tendermint.proto" (package "ibc.lightclients.tendermint.v1", syntax proto3)
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
import { ValidatorSet } from "../../../../tendermint/types/validator";
import { SignedHeader } from "../../../../tendermint/types/types";
import { MerkleRoot } from "../../../core/commitment/v1/commitment";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { ProofSpec } from "../../../../proofs";
import { Height } from "../../../core/client/v1/client";
import { Duration } from "../../../../google/protobuf/duration";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 *
 * @generated from protobuf message ibc.lightclients.tendermint.v1.ClientState
 */
export interface ClientState {
    /**
     * @generated from protobuf field: string chain_id = 1;
     */
    chainId: string;
    /**
     * @generated from protobuf field: ibc.lightclients.tendermint.v1.Fraction trust_level = 2;
     */
    trustLevel?: Fraction;
    /**
     * duration of the period since the LastestTimestamp during which the
     * submitted headers are valid for upgrade
     *
     * @generated from protobuf field: google.protobuf.Duration trusting_period = 3;
     */
    trustingPeriod?: Duration;
    /**
     * duration of the staking unbonding period
     *
     * @generated from protobuf field: google.protobuf.Duration unbonding_period = 4;
     */
    unbondingPeriod?: Duration;
    /**
     * defines how much new (untrusted) header's Time can drift into the future.
     *
     * @generated from protobuf field: google.protobuf.Duration max_clock_drift = 5;
     */
    maxClockDrift?: Duration;
    /**
     * Block height when the client was frozen due to a misbehaviour
     *
     * @generated from protobuf field: ibc.core.client.v1.Height frozen_height = 6;
     */
    frozenHeight?: Height;
    /**
     * Latest height the client was updated to
     *
     * @generated from protobuf field: ibc.core.client.v1.Height latest_height = 7;
     */
    latestHeight?: Height;
    /**
     * Proof specifications used in verifying counterparty state
     *
     * @generated from protobuf field: repeated ics23.ProofSpec proof_specs = 8;
     */
    proofSpecs: ProofSpec[];
    /**
     * Path at which next upgraded client will be committed.
     * Each element corresponds to the key for a single CommitmentProof in the
     * chained proof. NOTE: ClientState must stored under
     * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
     * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
     * the default upgrade module, upgrade_path should be []string{"upgrade",
     * "upgradedIBCState"}`
     *
     * @generated from protobuf field: repeated string upgrade_path = 9;
     */
    upgradePath: string[];
    /**
     * This flag, when set to true, will allow governance to recover a client
     * which has expired
     *
     * @generated from protobuf field: bool allow_update_after_expiry = 10;
     */
    allowUpdateAfterExpiry: boolean;
    /**
     * This flag, when set to true, will allow governance to unfreeze a client
     * whose chain has experienced a misbehaviour event
     *
     * @generated from protobuf field: bool allow_update_after_misbehaviour = 11;
     */
    allowUpdateAfterMisbehaviour: boolean;
}
/**
 * ConsensusState defines the consensus state from Tendermint.
 *
 * @generated from protobuf message ibc.lightclients.tendermint.v1.ConsensusState
 */
export interface ConsensusState {
    /**
     * timestamp that corresponds to the block height in which the ConsensusState
     * was stored.
     *
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 1;
     */
    timestamp?: Timestamp;
    /**
     * commitment root (i.e app hash)
     *
     * @generated from protobuf field: ibc.core.commitment.v1.MerkleRoot root = 2;
     */
    root?: MerkleRoot;
    /**
     * @generated from protobuf field: bytes next_validators_hash = 3;
     */
    nextValidatorsHash: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 *
 * @generated from protobuf message ibc.lightclients.tendermint.v1.Misbehaviour
 */
export interface Misbehaviour {
    /**
     * @generated from protobuf field: string client_id = 1;
     */
    clientId: string;
    /**
     * @generated from protobuf field: ibc.lightclients.tendermint.v1.Header header_1 = 2;
     */
    header1?: Header;
    /**
     * @generated from protobuf field: ibc.lightclients.tendermint.v1.Header header_2 = 3;
     */
    header2?: Header;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 *
 * @generated from protobuf message ibc.lightclients.tendermint.v1.Header
 */
export interface Header {
    /**
     * @generated from protobuf field: tendermint.types.SignedHeader signed_header = 1;
     */
    signedHeader?: SignedHeader;
    /**
     * @generated from protobuf field: tendermint.types.ValidatorSet validator_set = 2;
     */
    validatorSet?: ValidatorSet;
    /**
     * @generated from protobuf field: ibc.core.client.v1.Height trusted_height = 3;
     */
    trustedHeight?: Height;
    /**
     * @generated from protobuf field: tendermint.types.ValidatorSet trusted_validators = 4;
     */
    trustedValidators?: ValidatorSet;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 *
 * @generated from protobuf message ibc.lightclients.tendermint.v1.Fraction
 */
export interface Fraction {
    /**
     * @generated from protobuf field: uint64 numerator = 1;
     */
    numerator: string;
    /**
     * @generated from protobuf field: uint64 denominator = 2;
     */
    denominator: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ClientState$Type extends MessageType<ClientState> {
    constructor() {
        super("ibc.lightclients.tendermint.v1.ClientState", [
            { no: 1, name: "chain_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "trust_level", kind: "message", T: () => Fraction, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"trust_level\"" } },
            { no: 3, name: "trusting_period", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"trusting_period\"", "gogoproto.stdduration": true } },
            { no: 4, name: "unbonding_period", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"unbonding_period\"", "gogoproto.stdduration": true } },
            { no: 5, name: "max_clock_drift", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"max_clock_drift\"", "gogoproto.stdduration": true } },
            { no: 6, name: "frozen_height", kind: "message", T: () => Height, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"frozen_height\"" } },
            { no: 7, name: "latest_height", kind: "message", T: () => Height, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"latest_height\"" } },
            { no: 8, name: "proof_specs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ProofSpec, options: { "gogoproto.moretags": "yaml:\"proof_specs\"" } },
            { no: 9, name: "upgrade_path", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"upgrade_path\"" } },
            { no: 10, name: "allow_update_after_expiry", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "gogoproto.moretags": "yaml:\"allow_update_after_expiry\"" } },
            { no: 11, name: "allow_update_after_misbehaviour", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "gogoproto.moretags": "yaml:\"allow_update_after_misbehaviour\"" } }
        ], { "gogoproto.goproto_getters": false });
    }
    create(value?: PartialMessage<ClientState>): ClientState {
        const message = { chainId: "", proofSpecs: [], upgradePath: [], allowUpdateAfterExpiry: false, allowUpdateAfterMisbehaviour: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ClientState>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientState): ClientState {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain_id */ 1:
                    message.chainId = reader.string();
                    break;
                case /* ibc.lightclients.tendermint.v1.Fraction trust_level */ 2:
                    message.trustLevel = Fraction.internalBinaryRead(reader, reader.uint32(), options, message.trustLevel);
                    break;
                case /* google.protobuf.Duration trusting_period */ 3:
                    message.trustingPeriod = Duration.internalBinaryRead(reader, reader.uint32(), options, message.trustingPeriod);
                    break;
                case /* google.protobuf.Duration unbonding_period */ 4:
                    message.unbondingPeriod = Duration.internalBinaryRead(reader, reader.uint32(), options, message.unbondingPeriod);
                    break;
                case /* google.protobuf.Duration max_clock_drift */ 5:
                    message.maxClockDrift = Duration.internalBinaryRead(reader, reader.uint32(), options, message.maxClockDrift);
                    break;
                case /* ibc.core.client.v1.Height frozen_height */ 6:
                    message.frozenHeight = Height.internalBinaryRead(reader, reader.uint32(), options, message.frozenHeight);
                    break;
                case /* ibc.core.client.v1.Height latest_height */ 7:
                    message.latestHeight = Height.internalBinaryRead(reader, reader.uint32(), options, message.latestHeight);
                    break;
                case /* repeated ics23.ProofSpec proof_specs */ 8:
                    message.proofSpecs.push(ProofSpec.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated string upgrade_path */ 9:
                    message.upgradePath.push(reader.string());
                    break;
                case /* bool allow_update_after_expiry */ 10:
                    message.allowUpdateAfterExpiry = reader.bool();
                    break;
                case /* bool allow_update_after_misbehaviour */ 11:
                    message.allowUpdateAfterMisbehaviour = reader.bool();
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
    internalBinaryWrite(message: ClientState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string chain_id = 1; */
        if (message.chainId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chainId);
        /* ibc.lightclients.tendermint.v1.Fraction trust_level = 2; */
        if (message.trustLevel)
            Fraction.internalBinaryWrite(message.trustLevel, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration trusting_period = 3; */
        if (message.trustingPeriod)
            Duration.internalBinaryWrite(message.trustingPeriod, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration unbonding_period = 4; */
        if (message.unbondingPeriod)
            Duration.internalBinaryWrite(message.unbondingPeriod, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration max_clock_drift = 5; */
        if (message.maxClockDrift)
            Duration.internalBinaryWrite(message.maxClockDrift, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* ibc.core.client.v1.Height frozen_height = 6; */
        if (message.frozenHeight)
            Height.internalBinaryWrite(message.frozenHeight, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* ibc.core.client.v1.Height latest_height = 7; */
        if (message.latestHeight)
            Height.internalBinaryWrite(message.latestHeight, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated ics23.ProofSpec proof_specs = 8; */
        for (let i = 0; i < message.proofSpecs.length; i++)
            ProofSpec.internalBinaryWrite(message.proofSpecs[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* repeated string upgrade_path = 9; */
        for (let i = 0; i < message.upgradePath.length; i++)
            writer.tag(9, WireType.LengthDelimited).string(message.upgradePath[i]);
        /* bool allow_update_after_expiry = 10; */
        if (message.allowUpdateAfterExpiry !== false)
            writer.tag(10, WireType.Varint).bool(message.allowUpdateAfterExpiry);
        /* bool allow_update_after_misbehaviour = 11; */
        if (message.allowUpdateAfterMisbehaviour !== false)
            writer.tag(11, WireType.Varint).bool(message.allowUpdateAfterMisbehaviour);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.lightclients.tendermint.v1.ClientState
 */
export const ClientState = new ClientState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConsensusState$Type extends MessageType<ConsensusState> {
    constructor() {
        super("ibc.lightclients.tendermint.v1.ConsensusState", [
            { no: 1, name: "timestamp", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.stdtime": true } },
            { no: 2, name: "root", kind: "message", T: () => MerkleRoot, options: { "gogoproto.nullable": false } },
            { no: 3, name: "next_validators_hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.moretags": "yaml:\"next_validators_hash\"", "gogoproto.casttype": "github.com/tendermint/tendermint/libs/bytes.HexBytes" } }
        ], { "gogoproto.goproto_getters": false });
    }
    create(value?: PartialMessage<ConsensusState>): ConsensusState {
        const message = { nextValidatorsHash: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ConsensusState>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConsensusState): ConsensusState {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Timestamp timestamp */ 1:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
                    break;
                case /* ibc.core.commitment.v1.MerkleRoot root */ 2:
                    message.root = MerkleRoot.internalBinaryRead(reader, reader.uint32(), options, message.root);
                    break;
                case /* bytes next_validators_hash */ 3:
                    message.nextValidatorsHash = reader.bytes();
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
    internalBinaryWrite(message: ConsensusState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.Timestamp timestamp = 1; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* ibc.core.commitment.v1.MerkleRoot root = 2; */
        if (message.root)
            MerkleRoot.internalBinaryWrite(message.root, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bytes next_validators_hash = 3; */
        if (message.nextValidatorsHash.length)
            writer.tag(3, WireType.LengthDelimited).bytes(message.nextValidatorsHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.lightclients.tendermint.v1.ConsensusState
 */
export const ConsensusState = new ConsensusState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Misbehaviour$Type extends MessageType<Misbehaviour> {
    constructor() {
        super("ibc.lightclients.tendermint.v1.Misbehaviour", [
            { no: 1, name: "client_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"client_id\"" } },
            { no: 2, name: "header_1", kind: "message", T: () => Header, options: { "gogoproto.customname": "Header1", "gogoproto.moretags": "yaml:\"header_1\"" } },
            { no: 3, name: "header_2", kind: "message", T: () => Header, options: { "gogoproto.customname": "Header2", "gogoproto.moretags": "yaml:\"header_2\"" } }
        ], { "gogoproto.goproto_getters": false });
    }
    create(value?: PartialMessage<Misbehaviour>): Misbehaviour {
        const message = { clientId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Misbehaviour>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Misbehaviour): Misbehaviour {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string client_id */ 1:
                    message.clientId = reader.string();
                    break;
                case /* ibc.lightclients.tendermint.v1.Header header_1 */ 2:
                    message.header1 = Header.internalBinaryRead(reader, reader.uint32(), options, message.header1);
                    break;
                case /* ibc.lightclients.tendermint.v1.Header header_2 */ 3:
                    message.header2 = Header.internalBinaryRead(reader, reader.uint32(), options, message.header2);
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
    internalBinaryWrite(message: Misbehaviour, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string client_id = 1; */
        if (message.clientId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.clientId);
        /* ibc.lightclients.tendermint.v1.Header header_1 = 2; */
        if (message.header1)
            Header.internalBinaryWrite(message.header1, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* ibc.lightclients.tendermint.v1.Header header_2 = 3; */
        if (message.header2)
            Header.internalBinaryWrite(message.header2, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.lightclients.tendermint.v1.Misbehaviour
 */
export const Misbehaviour = new Misbehaviour$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Header$Type extends MessageType<Header> {
    constructor() {
        super("ibc.lightclients.tendermint.v1.Header", [
            { no: 1, name: "signed_header", kind: "message", T: () => SignedHeader, options: { "gogoproto.embed": true, "gogoproto.moretags": "yaml:\"signed_header\"" } },
            { no: 2, name: "validator_set", kind: "message", T: () => ValidatorSet, options: { "gogoproto.moretags": "yaml:\"validator_set\"" } },
            { no: 3, name: "trusted_height", kind: "message", T: () => Height, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"trusted_height\"" } },
            { no: 4, name: "trusted_validators", kind: "message", T: () => ValidatorSet, options: { "gogoproto.moretags": "yaml:\"trusted_validators\"" } }
        ]);
    }
    create(value?: PartialMessage<Header>): Header {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Header>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Header): Header {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tendermint.types.SignedHeader signed_header */ 1:
                    message.signedHeader = SignedHeader.internalBinaryRead(reader, reader.uint32(), options, message.signedHeader);
                    break;
                case /* tendermint.types.ValidatorSet validator_set */ 2:
                    message.validatorSet = ValidatorSet.internalBinaryRead(reader, reader.uint32(), options, message.validatorSet);
                    break;
                case /* ibc.core.client.v1.Height trusted_height */ 3:
                    message.trustedHeight = Height.internalBinaryRead(reader, reader.uint32(), options, message.trustedHeight);
                    break;
                case /* tendermint.types.ValidatorSet trusted_validators */ 4:
                    message.trustedValidators = ValidatorSet.internalBinaryRead(reader, reader.uint32(), options, message.trustedValidators);
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
    internalBinaryWrite(message: Header, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tendermint.types.SignedHeader signed_header = 1; */
        if (message.signedHeader)
            SignedHeader.internalBinaryWrite(message.signedHeader, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tendermint.types.ValidatorSet validator_set = 2; */
        if (message.validatorSet)
            ValidatorSet.internalBinaryWrite(message.validatorSet, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* ibc.core.client.v1.Height trusted_height = 3; */
        if (message.trustedHeight)
            Height.internalBinaryWrite(message.trustedHeight, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* tendermint.types.ValidatorSet trusted_validators = 4; */
        if (message.trustedValidators)
            ValidatorSet.internalBinaryWrite(message.trustedValidators, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.lightclients.tendermint.v1.Header
 */
export const Header = new Header$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Fraction$Type extends MessageType<Fraction> {
    constructor() {
        super("ibc.lightclients.tendermint.v1.Fraction", [
            { no: 1, name: "numerator", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "denominator", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
    create(value?: PartialMessage<Fraction>): Fraction {
        const message = { numerator: "0", denominator: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Fraction>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Fraction): Fraction {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 numerator */ 1:
                    message.numerator = reader.uint64().toString();
                    break;
                case /* uint64 denominator */ 2:
                    message.denominator = reader.uint64().toString();
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
    internalBinaryWrite(message: Fraction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 numerator = 1; */
        if (message.numerator !== "0")
            writer.tag(1, WireType.Varint).uint64(message.numerator);
        /* uint64 denominator = 2; */
        if (message.denominator !== "0")
            writer.tag(2, WireType.Varint).uint64(message.denominator);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.lightclients.tendermint.v1.Fraction
 */
export const Fraction = new Fraction$Type();
