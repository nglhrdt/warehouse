```mermaid
erDiagram
    Product ||--o{ Inventory : stores
    Warehouse ||--o{ Inventory : contains
    Supplier ||--o{ Product : supplies
    Product {
        int id
        string name
        string description
        float price
    }
    Warehouse {
        int id
        string location
    }
    Inventory {
        int product_id
        int warehouse_id
        int quantity
    }
    Supplier {
        int id
        string name
        string contact_info
    }