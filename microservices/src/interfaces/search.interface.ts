import { Field, QueryDslRangeQuery, SearchHit } from "@elastic/elasticsearch/lib/api/types";

//defines the structure of the search response from Elasticsearch.
export interface ISearchResult {
  hits: SearchHit[];
  total: number;
}


//used to describe the total number of search hits.
export interface IHitsTotal {
  value: number;
  relation: string;
}

//defines the types of queries that can be used in an Elasticsearch search request.
export interface IQueryList {
  query_string?: IQueryString;  // A full-text search query.
  range?: Partial<Record<Field, QueryDslRangeQuery>>;  //A query to filter results based on numeric or date ranges
  term?: ITerm;  // An exact match filter
}


//This interface defines a full-text search query.
export interface IQueryString {
  fields: string[];
  query: string;
}

//represents a term query, which is used for exact value matching.
export interface ITerm {
  active: boolean;
}

//used for handling pagination in search results.
export interface IPaginateProps {
  from: string;
  size: string;
  type: string;
}
