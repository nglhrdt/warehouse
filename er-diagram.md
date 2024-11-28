```mermaid
erDiagram
    Item ||--o{ Inventory : "is stored in"
    Organizer ||--o{ Inventory : "contains"

    Item {
        UUID id PK
        STRING name
    }

    Organizer {
        UUID id PK
        STRING name
        INT rows
        INT cols
    }

    Inventory {
        UUID item_id PK
        UUID organizer_id PK
        INTEGER quantity
        INTEGER row
        INTEGER col
    }