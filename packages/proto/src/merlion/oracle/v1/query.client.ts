// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "merlion/oracle/v1/query.proto" (package "merlion.oracle.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Query } from "./query";
import type { QueryParamsResponse } from "./query";
import type { QueryParamsRequest } from "./query";
import type { QueryAggregateVotesResponse } from "./query";
import type { QueryAggregateVotesRequest } from "./query";
import type { QueryAggregateVoteResponse } from "./query";
import type { QueryAggregateVoteRequest } from "./query";
import type { QueryAggregatePrevotesResponse } from "./query";
import type { QueryAggregatePrevotesRequest } from "./query";
import type { QueryAggregatePrevoteResponse } from "./query";
import type { QueryAggregatePrevoteRequest } from "./query";
import type { QueryMissCounterResponse } from "./query";
import type { QueryMissCounterRequest } from "./query";
import type { QueryFeederDelegationResponse } from "./query";
import type { QueryFeederDelegationRequest } from "./query";
import type { QueryTargetsResponse } from "./query";
import type { QueryTargetsRequest } from "./query";
import type { QueryVoteTargetsResponse } from "./query";
import type { QueryVoteTargetsRequest } from "./query";
import type { QueryActivesResponse } from "./query";
import type { QueryActivesRequest } from "./query";
import type { QueryExchangeRatesResponse } from "./query";
import type { QueryExchangeRatesRequest } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { QueryExchangeRateResponse } from "./query";
import type { QueryExchangeRateRequest } from "./query";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service merlion.oracle.v1.Query
 */
export interface IQueryClient {
    /**
     * ExchangeRate returns exchange rate of a denom.
     *
     * @generated from protobuf rpc: ExchangeRate(merlion.oracle.v1.QueryExchangeRateRequest) returns (merlion.oracle.v1.QueryExchangeRateResponse);
     */
    exchangeRate(input: QueryExchangeRateRequest, options?: RpcOptions): UnaryCall<QueryExchangeRateRequest, QueryExchangeRateResponse>;
    /**
     * ExchangeRates returns exchange rates of all denoms.
     *
     * @generated from protobuf rpc: ExchangeRates(merlion.oracle.v1.QueryExchangeRatesRequest) returns (merlion.oracle.v1.QueryExchangeRatesResponse);
     */
    exchangeRates(input: QueryExchangeRatesRequest, options?: RpcOptions): UnaryCall<QueryExchangeRatesRequest, QueryExchangeRatesResponse>;
    /**
     * Actives returns all active denoms.
     *
     * @generated from protobuf rpc: Actives(merlion.oracle.v1.QueryActivesRequest) returns (merlion.oracle.v1.QueryActivesResponse);
     */
    actives(input: QueryActivesRequest, options?: RpcOptions): UnaryCall<QueryActivesRequest, QueryActivesResponse>;
    /**
     * VoteTargets returns all vote target denoms.
     *
     * @generated from protobuf rpc: VoteTargets(merlion.oracle.v1.QueryVoteTargetsRequest) returns (merlion.oracle.v1.QueryVoteTargetsResponse);
     */
    voteTargets(input: QueryVoteTargetsRequest, options?: RpcOptions): UnaryCall<QueryVoteTargetsRequest, QueryVoteTargetsResponse>;
    /**
     * Targets returns all target denoms (including vote targets).
     *
     * @generated from protobuf rpc: Targets(merlion.oracle.v1.QueryTargetsRequest) returns (merlion.oracle.v1.QueryTargetsResponse);
     */
    targets(input: QueryTargetsRequest, options?: RpcOptions): UnaryCall<QueryTargetsRequest, QueryTargetsResponse>;
    /**
     * FeederDelegation returns feeder delegation of a validator.
     *
     * @generated from protobuf rpc: FeederDelegation(merlion.oracle.v1.QueryFeederDelegationRequest) returns (merlion.oracle.v1.QueryFeederDelegationResponse);
     */
    feederDelegation(input: QueryFeederDelegationRequest, options?: RpcOptions): UnaryCall<QueryFeederDelegationRequest, QueryFeederDelegationResponse>;
    /**
     * MissCounter returns oracle miss counter of a validator.
     *
     * @generated from protobuf rpc: MissCounter(merlion.oracle.v1.QueryMissCounterRequest) returns (merlion.oracle.v1.QueryMissCounterResponse);
     */
    missCounter(input: QueryMissCounterRequest, options?: RpcOptions): UnaryCall<QueryMissCounterRequest, QueryMissCounterResponse>;
    /**
     * AggregatePrevote returns an aggregate prevote of a validator.
     *
     * @generated from protobuf rpc: AggregatePrevote(merlion.oracle.v1.QueryAggregatePrevoteRequest) returns (merlion.oracle.v1.QueryAggregatePrevoteResponse);
     */
    aggregatePrevote(input: QueryAggregatePrevoteRequest, options?: RpcOptions): UnaryCall<QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponse>;
    /**
     * AggregatePrevotes returns aggregate prevotes of all validators.
     *
     * @generated from protobuf rpc: AggregatePrevotes(merlion.oracle.v1.QueryAggregatePrevotesRequest) returns (merlion.oracle.v1.QueryAggregatePrevotesResponse);
     */
    aggregatePrevotes(input: QueryAggregatePrevotesRequest, options?: RpcOptions): UnaryCall<QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponse>;
    /**
     * AggregateVote returns an aggregate vote of a validator.
     *
     * @generated from protobuf rpc: AggregateVote(merlion.oracle.v1.QueryAggregateVoteRequest) returns (merlion.oracle.v1.QueryAggregateVoteResponse);
     */
    aggregateVote(input: QueryAggregateVoteRequest, options?: RpcOptions): UnaryCall<QueryAggregateVoteRequest, QueryAggregateVoteResponse>;
    /**
     * AggregateVotes returns aggregate votes of all validators.
     *
     * @generated from protobuf rpc: AggregateVotes(merlion.oracle.v1.QueryAggregateVotesRequest) returns (merlion.oracle.v1.QueryAggregateVotesResponse);
     */
    aggregateVotes(input: QueryAggregateVotesRequest, options?: RpcOptions): UnaryCall<QueryAggregateVotesRequest, QueryAggregateVotesResponse>;
    /**
     * Parameters queries the parameters of the module.
     *
     * @generated from protobuf rpc: Params(merlion.oracle.v1.QueryParamsRequest) returns (merlion.oracle.v1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse>;
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service merlion.oracle.v1.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
    typeName = Query.typeName;
    methods = Query.methods;
    options = Query.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * ExchangeRate returns exchange rate of a denom.
     *
     * @generated from protobuf rpc: ExchangeRate(merlion.oracle.v1.QueryExchangeRateRequest) returns (merlion.oracle.v1.QueryExchangeRateResponse);
     */
    exchangeRate(input: QueryExchangeRateRequest, options?: RpcOptions): UnaryCall<QueryExchangeRateRequest, QueryExchangeRateResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryExchangeRateRequest, QueryExchangeRateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ExchangeRates returns exchange rates of all denoms.
     *
     * @generated from protobuf rpc: ExchangeRates(merlion.oracle.v1.QueryExchangeRatesRequest) returns (merlion.oracle.v1.QueryExchangeRatesResponse);
     */
    exchangeRates(input: QueryExchangeRatesRequest, options?: RpcOptions): UnaryCall<QueryExchangeRatesRequest, QueryExchangeRatesResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryExchangeRatesRequest, QueryExchangeRatesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Actives returns all active denoms.
     *
     * @generated from protobuf rpc: Actives(merlion.oracle.v1.QueryActivesRequest) returns (merlion.oracle.v1.QueryActivesResponse);
     */
    actives(input: QueryActivesRequest, options?: RpcOptions): UnaryCall<QueryActivesRequest, QueryActivesResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryActivesRequest, QueryActivesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * VoteTargets returns all vote target denoms.
     *
     * @generated from protobuf rpc: VoteTargets(merlion.oracle.v1.QueryVoteTargetsRequest) returns (merlion.oracle.v1.QueryVoteTargetsResponse);
     */
    voteTargets(input: QueryVoteTargetsRequest, options?: RpcOptions): UnaryCall<QueryVoteTargetsRequest, QueryVoteTargetsResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryVoteTargetsRequest, QueryVoteTargetsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Targets returns all target denoms (including vote targets).
     *
     * @generated from protobuf rpc: Targets(merlion.oracle.v1.QueryTargetsRequest) returns (merlion.oracle.v1.QueryTargetsResponse);
     */
    targets(input: QueryTargetsRequest, options?: RpcOptions): UnaryCall<QueryTargetsRequest, QueryTargetsResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryTargetsRequest, QueryTargetsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * FeederDelegation returns feeder delegation of a validator.
     *
     * @generated from protobuf rpc: FeederDelegation(merlion.oracle.v1.QueryFeederDelegationRequest) returns (merlion.oracle.v1.QueryFeederDelegationResponse);
     */
    feederDelegation(input: QueryFeederDelegationRequest, options?: RpcOptions): UnaryCall<QueryFeederDelegationRequest, QueryFeederDelegationResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryFeederDelegationRequest, QueryFeederDelegationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * MissCounter returns oracle miss counter of a validator.
     *
     * @generated from protobuf rpc: MissCounter(merlion.oracle.v1.QueryMissCounterRequest) returns (merlion.oracle.v1.QueryMissCounterResponse);
     */
    missCounter(input: QueryMissCounterRequest, options?: RpcOptions): UnaryCall<QueryMissCounterRequest, QueryMissCounterResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryMissCounterRequest, QueryMissCounterResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * AggregatePrevote returns an aggregate prevote of a validator.
     *
     * @generated from protobuf rpc: AggregatePrevote(merlion.oracle.v1.QueryAggregatePrevoteRequest) returns (merlion.oracle.v1.QueryAggregatePrevoteResponse);
     */
    aggregatePrevote(input: QueryAggregatePrevoteRequest, options?: RpcOptions): UnaryCall<QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * AggregatePrevotes returns aggregate prevotes of all validators.
     *
     * @generated from protobuf rpc: AggregatePrevotes(merlion.oracle.v1.QueryAggregatePrevotesRequest) returns (merlion.oracle.v1.QueryAggregatePrevotesResponse);
     */
    aggregatePrevotes(input: QueryAggregatePrevotesRequest, options?: RpcOptions): UnaryCall<QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * AggregateVote returns an aggregate vote of a validator.
     *
     * @generated from protobuf rpc: AggregateVote(merlion.oracle.v1.QueryAggregateVoteRequest) returns (merlion.oracle.v1.QueryAggregateVoteResponse);
     */
    aggregateVote(input: QueryAggregateVoteRequest, options?: RpcOptions): UnaryCall<QueryAggregateVoteRequest, QueryAggregateVoteResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryAggregateVoteRequest, QueryAggregateVoteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * AggregateVotes returns aggregate votes of all validators.
     *
     * @generated from protobuf rpc: AggregateVotes(merlion.oracle.v1.QueryAggregateVotesRequest) returns (merlion.oracle.v1.QueryAggregateVotesResponse);
     */
    aggregateVotes(input: QueryAggregateVotesRequest, options?: RpcOptions): UnaryCall<QueryAggregateVotesRequest, QueryAggregateVotesResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryAggregateVotesRequest, QueryAggregateVotesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Parameters queries the parameters of the module.
     *
     * @generated from protobuf rpc: Params(merlion.oracle.v1.QueryParamsRequest) returns (merlion.oracle.v1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryParamsRequest, QueryParamsResponse>("unary", this._transport, method, opt, input);
    }
}
