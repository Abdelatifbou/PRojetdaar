/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace CardRetail {
  export type ListingStruct = {
    seller: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    isSold: PromiseOrValue<boolean>;
  };

  export type ListingStructOutput = [string, BigNumber, BigNumber, boolean] & {
    seller: string;
    tokenId: BigNumber;
    price: BigNumber;
    isSold: boolean;
  };
}

export interface CardRetailInterface extends utils.Interface {
  functions: {
    "buyNFT(uint256)": FunctionFragment;
    "getListing(uint256)": FunctionFragment;
    "getListingCount()": FunctionFragment;
    "getListings()": FunctionFragment;
    "listNFT(uint256,uint256)": FunctionFragment;
    "listings(uint256)": FunctionFragment;
    "nftContract()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyNFT"
      | "getListing"
      | "getListingCount"
      | "getListings"
      | "listNFT"
      | "listings"
      | "nftContract"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyNFT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getListing",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getListingCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getListings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listNFT",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "listings",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "nftContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "buyNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getListingCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getListings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nftContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "NFTListed(address,uint256,uint256)": EventFragment;
    "NFTSold(address,address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NFTListed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTSold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface NFTListedEventObject {
  seller: string;
  tokenId: BigNumber;
  price: BigNumber;
}
export type NFTListedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  NFTListedEventObject
>;

export type NFTListedEventFilter = TypedEventFilter<NFTListedEvent>;

export interface NFTSoldEventObject {
  buyer: string;
  seller: string;
  tokenId: BigNumber;
  price: BigNumber;
}
export type NFTSoldEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  NFTSoldEventObject
>;

export type NFTSoldEventFilter = TypedEventFilter<NFTSoldEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface CardRetail extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CardRetailInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyNFT(
      _listingIndex: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getListing(
      _listingIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[CardRetail.ListingStructOutput]>;

    getListingCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getListings(
      overrides?: CallOverrides
    ): Promise<[CardRetail.ListingStructOutput[]]>;

    listNFT(
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    listings(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        isSold: boolean;
      }
    >;

    nftContract(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buyNFT(
    _listingIndex: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getListing(
    _listingIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<CardRetail.ListingStructOutput>;

  getListingCount(overrides?: CallOverrides): Promise<BigNumber>;

  getListings(
    overrides?: CallOverrides
  ): Promise<CardRetail.ListingStructOutput[]>;

  listNFT(
    _tokenId: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  listings(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, boolean] & {
      seller: string;
      tokenId: BigNumber;
      price: BigNumber;
      isSold: boolean;
    }
  >;

  nftContract(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyNFT(
      _listingIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getListing(
      _listingIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<CardRetail.ListingStructOutput>;

    getListingCount(overrides?: CallOverrides): Promise<BigNumber>;

    getListings(
      overrides?: CallOverrides
    ): Promise<CardRetail.ListingStructOutput[]>;

    listNFT(
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    listings(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        seller: string;
        tokenId: BigNumber;
        price: BigNumber;
        isSold: boolean;
      }
    >;

    nftContract(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NFTListed(address,uint256,uint256)"(
      seller?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): NFTListedEventFilter;
    NFTListed(
      seller?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): NFTListedEventFilter;

    "NFTSold(address,address,uint256,uint256)"(
      buyer?: PromiseOrValue<string> | null,
      seller?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): NFTSoldEventFilter;
    NFTSold(
      buyer?: PromiseOrValue<string> | null,
      seller?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): NFTSoldEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    buyNFT(
      _listingIndex: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getListing(
      _listingIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getListingCount(overrides?: CallOverrides): Promise<BigNumber>;

    getListings(overrides?: CallOverrides): Promise<BigNumber>;

    listNFT(
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    listings(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nftContract(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyNFT(
      _listingIndex: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getListing(
      _listingIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getListingCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getListings(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listNFT(
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    listings(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nftContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}