// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "cosmos/slashing/v1beta1/query.proto" (package "cosmos.slashing.v1beta1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Query } from "./query";
import type { QuerySigningInfosResponse } from "./query";
import type { QuerySigningInfosRequest } from "./query";
import type { QuerySigningInfoResponse } from "./query";
import type { QuerySigningInfoRequest } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { QueryParamsResponse } from "./query";
import type { QueryParamsRequest } from "./query";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Query provides defines the gRPC querier service
 *
 * @generated from protobuf service cosmos.slashing.v1beta1.Query
 */
export interface IQueryClient {
    /**
     * Params queries the parameters of slashing module
     *
     * @generated from protobuf rpc: Params(cosmos.slashing.v1beta1.QueryParamsRequest) returns (cosmos.slashing.v1beta1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse>;
    /**
     * SigningInfo queries the signing info of given cons address
     *
     * @generated from protobuf rpc: SigningInfo(cosmos.slashing.v1beta1.QuerySigningInfoRequest) returns (cosmos.slashing.v1beta1.QuerySigningInfoResponse);
     */
    signingInfo(input: QuerySigningInfoRequest, options?: RpcOptions): UnaryCall<QuerySigningInfoRequest, QuerySigningInfoResponse>;
    /**
     * SigningInfos queries signing info of all validators
     *
     * @generated from protobuf rpc: SigningInfos(cosmos.slashing.v1beta1.QuerySigningInfosRequest) returns (cosmos.slashing.v1beta1.QuerySigningInfosResponse);
     */
    signingInfos(input: QuerySigningInfosRequest, options?: RpcOptions): UnaryCall<QuerySigningInfosRequest, QuerySigningInfosResponse>;
}
/**
 * Query provides defines the gRPC querier service
 *
 * @generated from protobuf service cosmos.slashing.v1beta1.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
    typeName = Query.typeName;
    methods = Query.methods;
    options = Query.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Params queries the parameters of slashing module
     *
     * @generated from protobuf rpc: Params(cosmos.slashing.v1beta1.QueryParamsRequest) returns (cosmos.slashing.v1beta1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryParamsRequest, QueryParamsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * SigningInfo queries the signing info of given cons address
     *
     * @generated from protobuf rpc: SigningInfo(cosmos.slashing.v1beta1.QuerySigningInfoRequest) returns (cosmos.slashing.v1beta1.QuerySigningInfoResponse);
     */
    signingInfo(input: QuerySigningInfoRequest, options?: RpcOptions): UnaryCall<QuerySigningInfoRequest, QuerySigningInfoResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<QuerySigningInfoRequest, QuerySigningInfoResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * SigningInfos queries signing info of all validators
     *
     * @generated from protobuf rpc: SigningInfos(cosmos.slashing.v1beta1.QuerySigningInfosRequest) returns (cosmos.slashing.v1beta1.QuerySigningInfosResponse);
     */
    signingInfos(input: QuerySigningInfosRequest, options?: RpcOptions): UnaryCall<QuerySigningInfosRequest, QuerySigningInfosResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<QuerySigningInfosRequest, QuerySigningInfosResponse>("unary", this._transport, method, opt, input);
    }
}
