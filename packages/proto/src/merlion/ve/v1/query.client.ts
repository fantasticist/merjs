// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "merlion/ve/v1/query.proto" (package "merlion.ve.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Query } from "./query";
import type { QueryParamsResponse } from "./query";
import type { QueryParamsRequest } from "./query";
import type { QueryVeNftResponse } from "./query";
import type { QueryVeNftRequest } from "./query";
import type { QueryVeNftsResponse } from "./query";
import type { QueryVeNftsRequest } from "./query";
import type { QueryVotingPowerResponse } from "./query";
import type { QueryVotingPowerRequest } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { QueryTotalVotingPowerResponse } from "./query";
import type { QueryTotalVotingPowerRequest } from "./query";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Query defines the ve gRPC querier service.
 *
 * @generated from protobuf service merlion.ve.v1.Query
 */
export interface IQueryClient {
    /**
     * TotalVotingPower queries the total voting power.
     *
     * @generated from protobuf rpc: TotalVotingPower(merlion.ve.v1.QueryTotalVotingPowerRequest) returns (merlion.ve.v1.QueryTotalVotingPowerResponse);
     */
    totalVotingPower(input: QueryTotalVotingPowerRequest, options?: RpcOptions): UnaryCall<QueryTotalVotingPowerRequest, QueryTotalVotingPowerResponse>;
    /**
     * VotingPower queries the voting power of a veNFT.
     *
     * @generated from protobuf rpc: VotingPower(merlion.ve.v1.QueryVotingPowerRequest) returns (merlion.ve.v1.QueryVotingPowerResponse);
     */
    votingPower(input: QueryVotingPowerRequest, options?: RpcOptions): UnaryCall<QueryVotingPowerRequest, QueryVotingPowerResponse>;
    /**
     * VeNfts queries all veNFTs of a given owner.
     *
     * @generated from protobuf rpc: VeNfts(merlion.ve.v1.QueryVeNftsRequest) returns (merlion.ve.v1.QueryVeNftsResponse);
     */
    veNfts(input: QueryVeNftsRequest, options?: RpcOptions): UnaryCall<QueryVeNftsRequest, QueryVeNftsResponse>;
    /**
     * VeNft queries an veNFT based on its id.
     *
     * @generated from protobuf rpc: VeNft(merlion.ve.v1.QueryVeNftRequest) returns (merlion.ve.v1.QueryVeNftResponse);
     */
    veNft(input: QueryVeNftRequest, options?: RpcOptions): UnaryCall<QueryVeNftRequest, QueryVeNftResponse>;
    /**
     * Parameters queries the parameters of the module.
     *
     * @generated from protobuf rpc: Params(merlion.ve.v1.QueryParamsRequest) returns (merlion.ve.v1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse>;
}
/**
 * Query defines the ve gRPC querier service.
 *
 * @generated from protobuf service merlion.ve.v1.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
    typeName = Query.typeName;
    methods = Query.methods;
    options = Query.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * TotalVotingPower queries the total voting power.
     *
     * @generated from protobuf rpc: TotalVotingPower(merlion.ve.v1.QueryTotalVotingPowerRequest) returns (merlion.ve.v1.QueryTotalVotingPowerResponse);
     */
    totalVotingPower(input: QueryTotalVotingPowerRequest, options?: RpcOptions): UnaryCall<QueryTotalVotingPowerRequest, QueryTotalVotingPowerResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryTotalVotingPowerRequest, QueryTotalVotingPowerResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * VotingPower queries the voting power of a veNFT.
     *
     * @generated from protobuf rpc: VotingPower(merlion.ve.v1.QueryVotingPowerRequest) returns (merlion.ve.v1.QueryVotingPowerResponse);
     */
    votingPower(input: QueryVotingPowerRequest, options?: RpcOptions): UnaryCall<QueryVotingPowerRequest, QueryVotingPowerResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryVotingPowerRequest, QueryVotingPowerResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * VeNfts queries all veNFTs of a given owner.
     *
     * @generated from protobuf rpc: VeNfts(merlion.ve.v1.QueryVeNftsRequest) returns (merlion.ve.v1.QueryVeNftsResponse);
     */
    veNfts(input: QueryVeNftsRequest, options?: RpcOptions): UnaryCall<QueryVeNftsRequest, QueryVeNftsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryVeNftsRequest, QueryVeNftsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * VeNft queries an veNFT based on its id.
     *
     * @generated from protobuf rpc: VeNft(merlion.ve.v1.QueryVeNftRequest) returns (merlion.ve.v1.QueryVeNftResponse);
     */
    veNft(input: QueryVeNftRequest, options?: RpcOptions): UnaryCall<QueryVeNftRequest, QueryVeNftResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryVeNftRequest, QueryVeNftResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Parameters queries the parameters of the module.
     *
     * @generated from protobuf rpc: Params(merlion.ve.v1.QueryParamsRequest) returns (merlion.ve.v1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryParamsRequest, QueryParamsResponse>("unary", this._transport, method, opt, input);
    }
}
