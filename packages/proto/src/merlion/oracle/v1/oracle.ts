// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "merlion/oracle/v1/oracle.proto" (package "merlion.oracle.v1", syntax proto3)
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
 * Params defines the parameters for the oracle module.
 *
 * @generated from protobuf message merlion.oracle.v1.Params
 */
export interface Params {
    /**
     * @generated from protobuf field: uint64 vote_period = 1;
     */
    votePeriod: string;
    /**
     * @generated from protobuf field: string vote_threshold = 2;
     */
    voteThreshold: string;
    /**
     * @generated from protobuf field: string reward_band = 3;
     */
    rewardBand: string;
    /**
     * @generated from protobuf field: uint64 reward_distribution_window = 4;
     */
    rewardDistributionWindow: string;
    /**
     * @generated from protobuf field: string slash_fraction = 5;
     */
    slashFraction: string;
    /**
     * @generated from protobuf field: uint64 slash_window = 6;
     */
    slashWindow: string;
    /**
     * @generated from protobuf field: string min_valid_per_window = 7;
     */
    minValidPerWindow: string;
}
/**
 * AggregateExchangeRatePrevote represents the aggregate prevoting on the
 * ExchangeRateVote. The purpose of aggregate prevoting is to hide vote exchange
 * rates with hash which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 *
 * @generated from protobuf message merlion.oracle.v1.AggregateExchangeRatePrevote
 */
export interface AggregateExchangeRatePrevote {
    /**
     * @generated from protobuf field: string hash = 1;
     */
    hash: string;
    /**
     * @generated from protobuf field: string voter = 2;
     */
    voter: string;
    /**
     * @generated from protobuf field: uint64 submit_block = 3;
     */
    submitBlock: string;
}
/**
 * AggregateExchangeRateVote represents the voting on
 * the exchange rates of various assets denominated in uUSD.
 *
 * @generated from protobuf message merlion.oracle.v1.AggregateExchangeRateVote
 */
export interface AggregateExchangeRateVote {
    /**
     * @generated from protobuf field: repeated merlion.oracle.v1.ExchangeRateTuple exchange_rate_tuples = 1;
     */
    exchangeRateTuples: ExchangeRateTuple[];
    /**
     * @generated from protobuf field: string voter = 2;
     */
    voter: string;
}
/**
 * ExchangeRateTuple stores interpreted exchange rates data.
 *
 * @generated from protobuf message merlion.oracle.v1.ExchangeRateTuple
 */
export interface ExchangeRateTuple {
    /**
     * @generated from protobuf field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from protobuf field: string exchange_rate = 2;
     */
    exchangeRate: string;
}
/**
 * RegisterTargetProposal is a gov Content type to register eligible
 * target asset which will be price quoted.
 *
 * @generated from protobuf message merlion.oracle.v1.RegisterTargetProposal
 */
export interface RegisterTargetProposal {
    /**
     * title of the proposal
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * proposal description
     *
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * target params
     *
     * @generated from protobuf field: merlion.oracle.v1.TargetParams target_params = 3;
     */
    targetParams?: TargetParams;
}
/**
 * @generated from protobuf message merlion.oracle.v1.TargetParams
 */
export interface TargetParams {
    /**
     * coin denom
     *
     * @generated from protobuf field: string denom = 1;
     */
    denom: string;
    /**
     * quotation source
     *
     * @generated from protobuf field: merlion.oracle.v1.TargetSource source = 2;
     */
    source: TargetSource;
    /**
     * quotation source DEX contract address
     *
     * @generated from protobuf field: string source_dex_contract = 3;
     */
    sourceDexContract: string;
}
/**
 * TargetSource enumerates the quotation source of a target asset.
 *
 * @generated from protobuf enum merlion.oracle.v1.TargetSource
 */
export enum TargetSource {
    /**
     * TARGET_SOURCE_UNSPECIFIED defines an invalid/undefined target source.
     *
     * @generated from protobuf enum value: TARGET_SOURCE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * TARGET_SOURCE_VALIDATORS target quotation source is from validators.
     *
     * @generated from protobuf enum value: TARGET_SOURCE_VALIDATORS = 1;
     */
    VALIDATORS = 1,
    /**
     * TARGET_SOURCE_DEX target quotation source is from on-chain DEX.
     *
     * @generated from protobuf enum value: TARGET_SOURCE_DEX = 2;
     */
    DEX = 2,
    /**
     * TARGET_SOURCE_INTERCHAIN_DEX target quotation source is from inter-chain
     * DEX.
     *
     * @generated from protobuf enum value: TARGET_SOURCE_INTERCHAIN_DEX = 3;
     */
    INTERCHAIN_DEX = 3,
    /**
     * TARGET_SOURCE_INTERCHAIN_ORACLE target quotation source is from inter-chain
     * oracle.
     *
     * @generated from protobuf enum value: TARGET_SOURCE_INTERCHAIN_ORACLE = 4;
     */
    INTERCHAIN_ORACLE = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
    constructor() {
        super("merlion.oracle.v1.Params", [
            { no: 1, name: "vote_period", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"vote_period\"" } },
            { no: 2, name: "vote_threshold", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"vote_threshold\"" } },
            { no: 3, name: "reward_band", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"reward_band\"" } },
            { no: 4, name: "reward_distribution_window", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"reward_distribution_window\"" } },
            { no: 5, name: "slash_fraction", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"slash_fraction\"" } },
            { no: 6, name: "slash_window", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"slash_window\"" } },
            { no: 7, name: "min_valid_per_window", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"min_valid_per_window\"" } }
        ], { "gogoproto.goproto_stringer": false, "gogoproto.equal": true });
    }
    create(value?: PartialMessage<Params>): Params {
        const message = { votePeriod: "0", voteThreshold: "", rewardBand: "", rewardDistributionWindow: "0", slashFraction: "", slashWindow: "0", minValidPerWindow: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Params>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 vote_period */ 1:
                    message.votePeriod = reader.uint64().toString();
                    break;
                case /* string vote_threshold */ 2:
                    message.voteThreshold = reader.string();
                    break;
                case /* string reward_band */ 3:
                    message.rewardBand = reader.string();
                    break;
                case /* uint64 reward_distribution_window */ 4:
                    message.rewardDistributionWindow = reader.uint64().toString();
                    break;
                case /* string slash_fraction */ 5:
                    message.slashFraction = reader.string();
                    break;
                case /* uint64 slash_window */ 6:
                    message.slashWindow = reader.uint64().toString();
                    break;
                case /* string min_valid_per_window */ 7:
                    message.minValidPerWindow = reader.string();
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
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 vote_period = 1; */
        if (message.votePeriod !== "0")
            writer.tag(1, WireType.Varint).uint64(message.votePeriod);
        /* string vote_threshold = 2; */
        if (message.voteThreshold !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.voteThreshold);
        /* string reward_band = 3; */
        if (message.rewardBand !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.rewardBand);
        /* uint64 reward_distribution_window = 4; */
        if (message.rewardDistributionWindow !== "0")
            writer.tag(4, WireType.Varint).uint64(message.rewardDistributionWindow);
        /* string slash_fraction = 5; */
        if (message.slashFraction !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.slashFraction);
        /* uint64 slash_window = 6; */
        if (message.slashWindow !== "0")
            writer.tag(6, WireType.Varint).uint64(message.slashWindow);
        /* string min_valid_per_window = 7; */
        if (message.minValidPerWindow !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.minValidPerWindow);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.oracle.v1.Params
 */
export const Params = new Params$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AggregateExchangeRatePrevote$Type extends MessageType<AggregateExchangeRatePrevote> {
    constructor() {
        super("merlion.oracle.v1.AggregateExchangeRatePrevote", [
            { no: 1, name: "hash", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"hash\"" } },
            { no: 2, name: "voter", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"voter\"" } },
            { no: 3, name: "submit_block", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"submit_block\"" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.goproto_stringer": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote {
        const message = { hash: "", voter: "", submitBlock: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AggregateExchangeRatePrevote>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AggregateExchangeRatePrevote): AggregateExchangeRatePrevote {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string hash */ 1:
                    message.hash = reader.string();
                    break;
                case /* string voter */ 2:
                    message.voter = reader.string();
                    break;
                case /* uint64 submit_block */ 3:
                    message.submitBlock = reader.uint64().toString();
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
    internalBinaryWrite(message: AggregateExchangeRatePrevote, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string hash = 1; */
        if (message.hash !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.hash);
        /* string voter = 2; */
        if (message.voter !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.voter);
        /* uint64 submit_block = 3; */
        if (message.submitBlock !== "0")
            writer.tag(3, WireType.Varint).uint64(message.submitBlock);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.oracle.v1.AggregateExchangeRatePrevote
 */
export const AggregateExchangeRatePrevote = new AggregateExchangeRatePrevote$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AggregateExchangeRateVote$Type extends MessageType<AggregateExchangeRateVote> {
    constructor() {
        super("merlion.oracle.v1.AggregateExchangeRateVote", [
            { no: 1, name: "exchange_rate_tuples", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExchangeRateTuple, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"exchange_rate_tuples\"", "gogoproto.castrepeated": "ExchangeRateTuples" } },
            { no: 2, name: "voter", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"voter\"" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.goproto_stringer": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<AggregateExchangeRateVote>): AggregateExchangeRateVote {
        const message = { exchangeRateTuples: [], voter: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AggregateExchangeRateVote>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AggregateExchangeRateVote): AggregateExchangeRateVote {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated merlion.oracle.v1.ExchangeRateTuple exchange_rate_tuples */ 1:
                    message.exchangeRateTuples.push(ExchangeRateTuple.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string voter */ 2:
                    message.voter = reader.string();
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
    internalBinaryWrite(message: AggregateExchangeRateVote, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated merlion.oracle.v1.ExchangeRateTuple exchange_rate_tuples = 1; */
        for (let i = 0; i < message.exchangeRateTuples.length; i++)
            ExchangeRateTuple.internalBinaryWrite(message.exchangeRateTuples[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string voter = 2; */
        if (message.voter !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.voter);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.oracle.v1.AggregateExchangeRateVote
 */
export const AggregateExchangeRateVote = new AggregateExchangeRateVote$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExchangeRateTuple$Type extends MessageType<ExchangeRateTuple> {
    constructor() {
        super("merlion.oracle.v1.ExchangeRateTuple", [
            { no: 1, name: "denom", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"denom\"" } },
            { no: 2, name: "exchange_rate", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"exchange_rate\"" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.goproto_stringer": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<ExchangeRateTuple>): ExchangeRateTuple {
        const message = { denom: "", exchangeRate: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExchangeRateTuple>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExchangeRateTuple): ExchangeRateTuple {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string denom */ 1:
                    message.denom = reader.string();
                    break;
                case /* string exchange_rate */ 2:
                    message.exchangeRate = reader.string();
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
    internalBinaryWrite(message: ExchangeRateTuple, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string denom = 1; */
        if (message.denom !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.denom);
        /* string exchange_rate = 2; */
        if (message.exchangeRate !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.exchangeRate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.oracle.v1.ExchangeRateTuple
 */
export const ExchangeRateTuple = new ExchangeRateTuple$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegisterTargetProposal$Type extends MessageType<RegisterTargetProposal> {
    constructor() {
        super("merlion.oracle.v1.RegisterTargetProposal", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "target_params", kind: "message", T: () => TargetParams, options: { "gogoproto.nullable": false } }
        ], { "gogoproto.equal": false });
    }
    create(value?: PartialMessage<RegisterTargetProposal>): RegisterTargetProposal {
        const message = { title: "", description: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RegisterTargetProposal>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegisterTargetProposal): RegisterTargetProposal {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                case /* merlion.oracle.v1.TargetParams target_params */ 3:
                    message.targetParams = TargetParams.internalBinaryRead(reader, reader.uint32(), options, message.targetParams);
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
    internalBinaryWrite(message: RegisterTargetProposal, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.title);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        /* merlion.oracle.v1.TargetParams target_params = 3; */
        if (message.targetParams)
            TargetParams.internalBinaryWrite(message.targetParams, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.oracle.v1.RegisterTargetProposal
 */
export const RegisterTargetProposal = new RegisterTargetProposal$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TargetParams$Type extends MessageType<TargetParams> {
    constructor() {
        super("merlion.oracle.v1.TargetParams", [
            { no: 1, name: "denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "source", kind: "enum", T: () => ["merlion.oracle.v1.TargetSource", TargetSource, "TARGET_SOURCE_"] },
            { no: 3, name: "source_dex_contract", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ], { "gogoproto.equal": false });
    }
    create(value?: PartialMessage<TargetParams>): TargetParams {
        const message = { denom: "", source: 0, sourceDexContract: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TargetParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TargetParams): TargetParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string denom */ 1:
                    message.denom = reader.string();
                    break;
                case /* merlion.oracle.v1.TargetSource source */ 2:
                    message.source = reader.int32();
                    break;
                case /* string source_dex_contract */ 3:
                    message.sourceDexContract = reader.string();
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
    internalBinaryWrite(message: TargetParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string denom = 1; */
        if (message.denom !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.denom);
        /* merlion.oracle.v1.TargetSource source = 2; */
        if (message.source !== 0)
            writer.tag(2, WireType.Varint).int32(message.source);
        /* string source_dex_contract = 3; */
        if (message.sourceDexContract !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.sourceDexContract);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.oracle.v1.TargetParams
 */
export const TargetParams = new TargetParams$Type();
