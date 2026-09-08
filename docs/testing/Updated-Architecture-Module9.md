# Updated Architecture – Module 9

```mermaid
flowchart TD

    U[ATTENDEES / USERS]

    V[Vue.js Application]

    A[App.vue]

    F[RegistrationForm.vue<br/>Add / Edit]

    L[RegistrationList.vue<br/>View / Search / Filter / Delete]

    S[RegistrationSummary.vue<br/>Statistics]

    AF[Active/Inactive Record Filter<br/>All / Active / Inactive]

    FD[Filtered Record Display]

    LS[(LocalStorage<br/>Registration Records)]

    U --> V

    V --> A

    A --> F
    A --> L
    A --> S

    L --> AF
    AF --> FD

    A <--> |Load / Save Records| LS

    classDef existing fill:#4472C4,color:white,stroke:#2F5597,stroke-width:2px;
    classDef affected fill:#F4CCCC,color:#990000,stroke:#CC0000,stroke-width:3px;

    class U,V,A,F,S,LS existing;
    class L,AF,FD affected;
```

## Architecture Update Annotation

Module 9 adds an **Active/Inactive Record Filter** to the `RegistrationList.vue` component. The existing Vue.js component structure and localStorage-based record persistence remain unchanged. The update only affects the record filtering and display flow.
