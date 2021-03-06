// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "ibc/core/channel/v1/query.proto" (package "ibc.core.channel.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Query } from "./query";
import type { QueryNextSequenceReceiveResponse } from "./query";
import type { QueryNextSequenceReceiveRequest } from "./query";
import type { QueryUnreceivedAcksResponse } from "./query";
import type { QueryUnreceivedAcksRequest } from "./query";
import type { QueryUnreceivedPacketsResponse } from "./query";
import type { QueryUnreceivedPacketsRequest } from "./query";
import type { QueryPacketAcknowledgementsResponse } from "./query";
import type { QueryPacketAcknowledgementsRequest } from "./query";
import type { QueryPacketAcknowledgementResponse } from "./query";
import type { QueryPacketAcknowledgementRequest } from "./query";
import type { QueryPacketReceiptResponse } from "./query";
import type { QueryPacketReceiptRequest } from "./query";
import type { QueryPacketCommitmentsResponse } from "./query";
import type { QueryPacketCommitmentsRequest } from "./query";
import type { QueryPacketCommitmentResponse } from "./query";
import type { QueryPacketCommitmentRequest } from "./query";
import type { QueryChannelConsensusStateResponse } from "./query";
import type { QueryChannelConsensusStateRequest } from "./query";
import type { QueryChannelClientStateResponse } from "./query";
import type { QueryChannelClientStateRequest } from "./query";
import type { QueryConnectionChannelsResponse } from "./query";
import type { QueryConnectionChannelsRequest } from "./query";
import type { QueryChannelsResponse } from "./query";
import type { QueryChannelsRequest } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { QueryChannelResponse } from "./query";
import type { QueryChannelRequest } from "./query";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Query provides defines the gRPC querier service
 *
 * @generated from protobuf service ibc.core.channel.v1.Query
 */
export interface IQueryClient {
    /**
     * Channel queries an IBC Channel.
     *
     * @generated from protobuf rpc: Channel(ibc.core.channel.v1.QueryChannelRequest) returns (ibc.core.channel.v1.QueryChannelResponse);
     */
    channel(input: QueryChannelRequest, options?: RpcOptions): UnaryCall<QueryChannelRequest, QueryChannelResponse>;
    /**
     * Channels queries all the IBC channels of a chain.
     *
     * @generated from protobuf rpc: Channels(ibc.core.channel.v1.QueryChannelsRequest) returns (ibc.core.channel.v1.QueryChannelsResponse);
     */
    channels(input: QueryChannelsRequest, options?: RpcOptions): UnaryCall<QueryChannelsRequest, QueryChannelsResponse>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     *
     * @generated from protobuf rpc: ConnectionChannels(ibc.core.channel.v1.QueryConnectionChannelsRequest) returns (ibc.core.channel.v1.QueryConnectionChannelsResponse);
     */
    connectionChannels(input: QueryConnectionChannelsRequest, options?: RpcOptions): UnaryCall<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     *
     * @generated from protobuf rpc: ChannelClientState(ibc.core.channel.v1.QueryChannelClientStateRequest) returns (ibc.core.channel.v1.QueryChannelClientStateResponse);
     */
    channelClientState(input: QueryChannelClientStateRequest, options?: RpcOptions): UnaryCall<QueryChannelClientStateRequest, QueryChannelClientStateResponse>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     *
     * @generated from protobuf rpc: ChannelConsensusState(ibc.core.channel.v1.QueryChannelConsensusStateRequest) returns (ibc.core.channel.v1.QueryChannelConsensusStateResponse);
     */
    channelConsensusState(input: QueryChannelConsensusStateRequest, options?: RpcOptions): UnaryCall<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>;
    /**
     * PacketCommitment queries a stored packet commitment hash.
     *
     * @generated from protobuf rpc: PacketCommitment(ibc.core.channel.v1.QueryPacketCommitmentRequest) returns (ibc.core.channel.v1.QueryPacketCommitmentResponse);
     */
    packetCommitment(input: QueryPacketCommitmentRequest, options?: RpcOptions): UnaryCall<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     *
     * @generated from protobuf rpc: PacketCommitments(ibc.core.channel.v1.QueryPacketCommitmentsRequest) returns (ibc.core.channel.v1.QueryPacketCommitmentsResponse);
     */
    packetCommitments(input: QueryPacketCommitmentsRequest, options?: RpcOptions): UnaryCall<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     *
     * @generated from protobuf rpc: PacketReceipt(ibc.core.channel.v1.QueryPacketReceiptRequest) returns (ibc.core.channel.v1.QueryPacketReceiptResponse);
     */
    packetReceipt(input: QueryPacketReceiptRequest, options?: RpcOptions): UnaryCall<QueryPacketReceiptRequest, QueryPacketReceiptResponse>;
    /**
     * PacketAcknowledgement queries a stored packet acknowledgement hash.
     *
     * @generated from protobuf rpc: PacketAcknowledgement(ibc.core.channel.v1.QueryPacketAcknowledgementRequest) returns (ibc.core.channel.v1.QueryPacketAcknowledgementResponse);
     */
    packetAcknowledgement(input: QueryPacketAcknowledgementRequest, options?: RpcOptions): UnaryCall<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     *
     * @generated from protobuf rpc: PacketAcknowledgements(ibc.core.channel.v1.QueryPacketAcknowledgementsRequest) returns (ibc.core.channel.v1.QueryPacketAcknowledgementsResponse);
     */
    packetAcknowledgements(input: QueryPacketAcknowledgementsRequest, options?: RpcOptions): UnaryCall<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     *
     * @generated from protobuf rpc: UnreceivedPackets(ibc.core.channel.v1.QueryUnreceivedPacketsRequest) returns (ibc.core.channel.v1.QueryUnreceivedPacketsResponse);
     */
    unreceivedPackets(input: QueryUnreceivedPacketsRequest, options?: RpcOptions): UnaryCall<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     *
     * @generated from protobuf rpc: UnreceivedAcks(ibc.core.channel.v1.QueryUnreceivedAcksRequest) returns (ibc.core.channel.v1.QueryUnreceivedAcksResponse);
     */
    unreceivedAcks(input: QueryUnreceivedAcksRequest, options?: RpcOptions): UnaryCall<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>;
    /**
     * NextSequenceReceive returns the next receive sequence for a given channel.
     *
     * @generated from protobuf rpc: NextSequenceReceive(ibc.core.channel.v1.QueryNextSequenceReceiveRequest) returns (ibc.core.channel.v1.QueryNextSequenceReceiveResponse);
     */
    nextSequenceReceive(input: QueryNextSequenceReceiveRequest, options?: RpcOptions): UnaryCall<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>;
}
/**
 * Query provides defines the gRPC querier service
 *
 * @generated from protobuf service ibc.core.channel.v1.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
    typeName = Query.typeName;
    methods = Query.methods;
    options = Query.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Channel queries an IBC Channel.
     *
     * @generated from protobuf rpc: Channel(ibc.core.channel.v1.QueryChannelRequest) returns (ibc.core.channel.v1.QueryChannelResponse);
     */
    channel(input: QueryChannelRequest, options?: RpcOptions): UnaryCall<QueryChannelRequest, QueryChannelResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryChannelRequest, QueryChannelResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Channels queries all the IBC channels of a chain.
     *
     * @generated from protobuf rpc: Channels(ibc.core.channel.v1.QueryChannelsRequest) returns (ibc.core.channel.v1.QueryChannelsResponse);
     */
    channels(input: QueryChannelsRequest, options?: RpcOptions): UnaryCall<QueryChannelsRequest, QueryChannelsResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryChannelsRequest, QueryChannelsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     *
     * @generated from protobuf rpc: ConnectionChannels(ibc.core.channel.v1.QueryConnectionChannelsRequest) returns (ibc.core.channel.v1.QueryConnectionChannelsResponse);
     */
    connectionChannels(input: QueryConnectionChannelsRequest, options?: RpcOptions): UnaryCall<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     *
     * @generated from protobuf rpc: ChannelClientState(ibc.core.channel.v1.QueryChannelClientStateRequest) returns (ibc.core.channel.v1.QueryChannelClientStateResponse);
     */
    channelClientState(input: QueryChannelClientStateRequest, options?: RpcOptions): UnaryCall<QueryChannelClientStateRequest, QueryChannelClientStateResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryChannelClientStateRequest, QueryChannelClientStateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     *
     * @generated from protobuf rpc: ChannelConsensusState(ibc.core.channel.v1.QueryChannelConsensusStateRequest) returns (ibc.core.channel.v1.QueryChannelConsensusStateResponse);
     */
    channelConsensusState(input: QueryChannelConsensusStateRequest, options?: RpcOptions): UnaryCall<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * PacketCommitment queries a stored packet commitment hash.
     *
     * @generated from protobuf rpc: PacketCommitment(ibc.core.channel.v1.QueryPacketCommitmentRequest) returns (ibc.core.channel.v1.QueryPacketCommitmentResponse);
     */
    packetCommitment(input: QueryPacketCommitmentRequest, options?: RpcOptions): UnaryCall<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     *
     * @generated from protobuf rpc: PacketCommitments(ibc.core.channel.v1.QueryPacketCommitmentsRequest) returns (ibc.core.channel.v1.QueryPacketCommitmentsResponse);
     */
    packetCommitments(input: QueryPacketCommitmentsRequest, options?: RpcOptions): UnaryCall<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     *
     * @generated from protobuf rpc: PacketReceipt(ibc.core.channel.v1.QueryPacketReceiptRequest) returns (ibc.core.channel.v1.QueryPacketReceiptResponse);
     */
    packetReceipt(input: QueryPacketReceiptRequest, options?: RpcOptions): UnaryCall<QueryPacketReceiptRequest, QueryPacketReceiptResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryPacketReceiptRequest, QueryPacketReceiptResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * PacketAcknowledgement queries a stored packet acknowledgement hash.
     *
     * @generated from protobuf rpc: PacketAcknowledgement(ibc.core.channel.v1.QueryPacketAcknowledgementRequest) returns (ibc.core.channel.v1.QueryPacketAcknowledgementResponse);
     */
    packetAcknowledgement(input: QueryPacketAcknowledgementRequest, options?: RpcOptions): UnaryCall<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     *
     * @generated from protobuf rpc: PacketAcknowledgements(ibc.core.channel.v1.QueryPacketAcknowledgementsRequest) returns (ibc.core.channel.v1.QueryPacketAcknowledgementsResponse);
     */
    packetAcknowledgements(input: QueryPacketAcknowledgementsRequest, options?: RpcOptions): UnaryCall<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     *
     * @generated from protobuf rpc: UnreceivedPackets(ibc.core.channel.v1.QueryUnreceivedPacketsRequest) returns (ibc.core.channel.v1.QueryUnreceivedPacketsResponse);
     */
    unreceivedPackets(input: QueryUnreceivedPacketsRequest, options?: RpcOptions): UnaryCall<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     *
     * @generated from protobuf rpc: UnreceivedAcks(ibc.core.channel.v1.QueryUnreceivedAcksRequest) returns (ibc.core.channel.v1.QueryUnreceivedAcksResponse);
     */
    unreceivedAcks(input: QueryUnreceivedAcksRequest, options?: RpcOptions): UnaryCall<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * NextSequenceReceive returns the next receive sequence for a given channel.
     *
     * @generated from protobuf rpc: NextSequenceReceive(ibc.core.channel.v1.QueryNextSequenceReceiveRequest) returns (ibc.core.channel.v1.QueryNextSequenceReceiveResponse);
     */
    nextSequenceReceive(input: QueryNextSequenceReceiveRequest, options?: RpcOptions): UnaryCall<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>("unary", this._transport, method, opt, input);
    }
}
