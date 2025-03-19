import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import type * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date; output: Date; }
};

export type Company = {
  __typename?: 'Company';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCompanyInput = {
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateJobInput = {
  description: Scalars['String']['input'];
  jobTitle: Scalars['String']['input'];
  jobType: JobType;
  location: Scalars['String']['input'];
  salary: Scalars['String']['input'];
};

export type Job = {
  __typename?: 'Job';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jobTitle: Scalars['String']['output'];
  jobType: JobType;
  location: Scalars['String']['output'];
  salary: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** The type of job */
export enum JobType {
  Contract = 'CONTRACT',
  FullTime = 'FULL_TIME',
  Internship = 'INTERNSHIP',
  PartTime = 'PART_TIME'
}

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Company;
  createJob: Job;
  deleteCompany: Scalars['Boolean']['output'];
  deleteJob: Scalars['Boolean']['output'];
  updateCompany: Scalars['Boolean']['output'];
  updateJob: Scalars['Boolean']['output'];
};


export type MutationCreateCompanyArgs = {
  company: CreateCompanyInput;
};


export type MutationCreateJobArgs = {
  job: CreateJobInput;
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteJobArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateCompanyArgs = {
  company: UpdateCompanyInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateJobArgs = {
  id: Scalars['String']['input'];
  job: UpdateJobInput;
};

export type Query = {
  __typename?: 'Query';
  findAllCompanies: Array<Company>;
  findAllJobs: Array<Job>;
  findOneCompany: Company;
  findOneJob: Job;
};


export type QueryFindOneCompanyArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindOneJobArgs = {
  id: Scalars['String']['input'];
};

export type UpdateCompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateJobInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  jobType?: InputMaybe<JobType>;
  location?: InputMaybe<Scalars['String']['input']>;
  salary?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompaniesQuery = { __typename?: 'Query', findAllCompanies: Array<{ __typename?: 'Company', id: string, name: string, description: string, email: string, phone: string, createdAt: Date, updatedAt: Date }> };

export type GetOneCompanyQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetOneCompanyQuery = { __typename?: 'Query', findOneCompany: { __typename?: 'Company', id: string, name: string, description: string, email: string, phone: string, createdAt: Date, updatedAt: Date } };

export type CreateCompanyMutationVariables = Exact<{
  company: CreateCompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: { __typename?: 'Company', id: string, name: string, description: string, email: string, phone: string } };

export type DeleteCompanyMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCompanyMutation = { __typename?: 'Mutation', deleteCompany: boolean };

export type UpdateCompanyMutationVariables = Exact<{
  id: Scalars['String']['input'];
  company: UpdateCompanyInput;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateCompany: boolean };

export type GetAllJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllJobsQuery = { __typename?: 'Query', findAllJobs: Array<{ __typename?: 'Job', id: string, jobTitle: string, jobType: JobType, location: string, description: string, salary: string, createdAt: Date, updatedAt: Date }> };

export type GetOneJobQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetOneJobQuery = { __typename?: 'Query', findOneJob: { __typename?: 'Job', id: string, jobTitle: string, jobType: JobType, location: string, description: string, salary: string, createdAt: Date, updatedAt: Date } };

export type CreateJobMutationVariables = Exact<{
  job: CreateJobInput;
}>;


export type CreateJobMutation = { __typename?: 'Mutation', createJob: { __typename?: 'Job', id: string, jobTitle: string, jobType: JobType, location: string, description: string, salary: string } };

export type DeleteJobMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteJobMutation = { __typename?: 'Mutation', deleteJob: boolean };

export type UpdateJobMutationVariables = Exact<{
  id: Scalars['String']['input'];
  job: UpdateJobInput;
}>;


export type UpdateJobMutation = { __typename?: 'Mutation', updateJob: boolean };


export const GetAllCompaniesDocument = gql`
    query GetAllCompanies {
  findAllCompanies {
    id
    name
    description
    email
    phone
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAllCompaniesQuery__
 *
 * To run a query within a Vue component, call `useGetAllCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCompaniesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetAllCompaniesQuery();
 */
export function useGetAllCompaniesQuery(options: VueApolloComposable.UseQueryOptions<GetAllCompaniesQuery, GetAllCompaniesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>(GetAllCompaniesDocument, {}, options);
}
export function useGetAllCompaniesLazyQuery(options: VueApolloComposable.UseQueryOptions<GetAllCompaniesQuery, GetAllCompaniesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>(GetAllCompaniesDocument, {}, options);
}
export type GetAllCompaniesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>;
export const GetOneCompanyDocument = gql`
    query GetOneCompany($id: String!) {
  findOneCompany(id: $id) {
    id
    name
    description
    email
    phone
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetOneCompanyQuery__
 *
 * To run a query within a Vue component, call `useGetOneCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneCompanyQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetOneCompanyQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetOneCompanyQuery(variables: GetOneCompanyQueryVariables | VueCompositionApi.Ref<GetOneCompanyQueryVariables> | ReactiveFunction<GetOneCompanyQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetOneCompanyQuery, GetOneCompanyQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetOneCompanyQuery, GetOneCompanyQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetOneCompanyQuery, GetOneCompanyQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetOneCompanyQuery, GetOneCompanyQueryVariables>(GetOneCompanyDocument, variables, options);
}
export function useGetOneCompanyLazyQuery(variables?: GetOneCompanyQueryVariables | VueCompositionApi.Ref<GetOneCompanyQueryVariables> | ReactiveFunction<GetOneCompanyQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetOneCompanyQuery, GetOneCompanyQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetOneCompanyQuery, GetOneCompanyQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetOneCompanyQuery, GetOneCompanyQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetOneCompanyQuery, GetOneCompanyQueryVariables>(GetOneCompanyDocument, variables, options);
}
export type GetOneCompanyQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetOneCompanyQuery, GetOneCompanyQueryVariables>;
export const CreateCompanyDocument = gql`
    mutation CreateCompany($company: CreateCompanyInput!) {
  createCompany(company: $company) {
    id
    name
    description
    email
    phone
  }
}
    `;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateCompanyMutation({
 *   variables: {
 *     company: // value for 'company'
 *   },
 * });
 */
export function useCreateCompanyMutation(options: VueApolloComposable.UseMutationOptions<CreateCompanyMutation, CreateCompanyMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateCompanyMutation, CreateCompanyMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, options);
}
export type CreateCompanyMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const DeleteCompanyDocument = gql`
    mutation DeleteCompany($id: String!) {
  deleteCompany(id: $id)
}
    `;

/**
 * __useDeleteCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteCompanyMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompanyMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteCompanyMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCompanyMutation(options: VueApolloComposable.UseMutationOptions<DeleteCompanyMutation, DeleteCompanyMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteCompanyMutation, DeleteCompanyMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteCompanyMutation, DeleteCompanyMutationVariables>(DeleteCompanyDocument, options);
}
export type DeleteCompanyMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteCompanyMutation, DeleteCompanyMutationVariables>;
export const UpdateCompanyDocument = gql`
    mutation UpdateCompany($id: String!, $company: UpdateCompanyInput!) {
  updateCompany(id: $id, company: $company)
}
    `;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateCompanyMutation({
 *   variables: {
 *     id: // value for 'id'
 *     company: // value for 'company'
 *   },
 * });
 */
export function useUpdateCompanyMutation(options: VueApolloComposable.UseMutationOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UpdateCompanyDocument, options);
}
export type UpdateCompanyMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const GetAllJobsDocument = gql`
    query GetAllJobs {
  findAllJobs {
    id
    jobTitle
    jobType
    location
    description
    salary
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAllJobsQuery__
 *
 * To run a query within a Vue component, call `useGetAllJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllJobsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetAllJobsQuery();
 */
export function useGetAllJobsQuery(options: VueApolloComposable.UseQueryOptions<GetAllJobsQuery, GetAllJobsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetAllJobsQuery, GetAllJobsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetAllJobsQuery, GetAllJobsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetAllJobsQuery, GetAllJobsQueryVariables>(GetAllJobsDocument, {}, options);
}
export function useGetAllJobsLazyQuery(options: VueApolloComposable.UseQueryOptions<GetAllJobsQuery, GetAllJobsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetAllJobsQuery, GetAllJobsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetAllJobsQuery, GetAllJobsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetAllJobsQuery, GetAllJobsQueryVariables>(GetAllJobsDocument, {}, options);
}
export type GetAllJobsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetAllJobsQuery, GetAllJobsQueryVariables>;
export const GetOneJobDocument = gql`
    query GetOneJob($id: String!) {
  findOneJob(id: $id) {
    id
    jobTitle
    jobType
    location
    description
    salary
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetOneJobQuery__
 *
 * To run a query within a Vue component, call `useGetOneJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneJobQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetOneJobQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetOneJobQuery(variables: GetOneJobQueryVariables | VueCompositionApi.Ref<GetOneJobQueryVariables> | ReactiveFunction<GetOneJobQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetOneJobQuery, GetOneJobQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetOneJobQuery, GetOneJobQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetOneJobQuery, GetOneJobQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetOneJobQuery, GetOneJobQueryVariables>(GetOneJobDocument, variables, options);
}
export function useGetOneJobLazyQuery(variables?: GetOneJobQueryVariables | VueCompositionApi.Ref<GetOneJobQueryVariables> | ReactiveFunction<GetOneJobQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetOneJobQuery, GetOneJobQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetOneJobQuery, GetOneJobQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetOneJobQuery, GetOneJobQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetOneJobQuery, GetOneJobQueryVariables>(GetOneJobDocument, variables, options);
}
export type GetOneJobQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetOneJobQuery, GetOneJobQueryVariables>;
export const CreateJobDocument = gql`
    mutation CreateJob($job: CreateJobInput!) {
  createJob(job: $job) {
    id
    jobTitle
    jobType
    location
    description
    salary
  }
}
    `;

/**
 * __useCreateJobMutation__
 *
 * To run a mutation, you first call `useCreateJobMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateJobMutation({
 *   variables: {
 *     job: // value for 'job'
 *   },
 * });
 */
export function useCreateJobMutation(options: VueApolloComposable.UseMutationOptions<CreateJobMutation, CreateJobMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateJobMutation, CreateJobMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateJobMutation, CreateJobMutationVariables>(CreateJobDocument, options);
}
export type CreateJobMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateJobMutation, CreateJobMutationVariables>;
export const DeleteJobDocument = gql`
    mutation DeleteJob($id: String!) {
  deleteJob(id: $id)
}
    `;

/**
 * __useDeleteJobMutation__
 *
 * To run a mutation, you first call `useDeleteJobMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteJobMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJobMutation(options: VueApolloComposable.UseMutationOptions<DeleteJobMutation, DeleteJobMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteJobMutation, DeleteJobMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteJobMutation, DeleteJobMutationVariables>(DeleteJobDocument, options);
}
export type DeleteJobMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteJobMutation, DeleteJobMutationVariables>;
export const UpdateJobDocument = gql`
    mutation UpdateJob($id: String!, $job: UpdateJobInput!) {
  updateJob(id: $id, job: $job)
}
    `;

/**
 * __useUpdateJobMutation__
 *
 * To run a mutation, you first call `useUpdateJobMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateJobMutation({
 *   variables: {
 *     id: // value for 'id'
 *     job: // value for 'job'
 *   },
 * });
 */
export function useUpdateJobMutation(options: VueApolloComposable.UseMutationOptions<UpdateJobMutation, UpdateJobMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateJobMutation, UpdateJobMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateJobMutation, UpdateJobMutationVariables>(UpdateJobDocument, options);
}
export type UpdateJobMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateJobMutation, UpdateJobMutationVariables>;