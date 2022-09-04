# Redux Toolkit and RTK Query findings

- Proposed folder structure: features, services
- Feature e.g. Counter include: redux slice, slice tests, component, component test
- Services e.g. catApi groups: all functions to call a specific endpoint
- Provider for the root of React application and Store which combines, redux slices and api services, register of middlewares (very easy and clean way to combine all "partial" redux elements and sevices to one single source of truth)
- Feature structure helps to organise, maintain code. Add into i.e. redux slice forces tests to be written
- Functions in reducer i.e. increment "mutate" the state, much easier to write and understand as oppose to spreading the state, prone to manual errors. However, it uses Immer.js under the hood so this "mutation" is not really mutating as this is being taken care of by Immer.js
- There is no need to create boilerplate of actions, constants. Actions are auto-generated from reducer functions. Can be exposed, as well as whole redux slice
- In a given API service there is a combined list of actions regarding the same endopint, enables to preview, beter organise code
- Ie API function getCat auto generate a hook useGetCatQuery which can be imported to FE together with {data, isLoadin, error, ...}
- Api service hook has a option to not fetch data on each mount, but i.e on button click. In those cases it can be skipped with {skip} object and trigger refetch with a click, also read from cache, until next fetch dispatch
- RTK Query borrows from some of modern frameworks i.e. Apollo with use of queries, mutations.
- RTK provides Typesctipt types which further improves code quality
