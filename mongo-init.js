db = db.getSiblingDB('inventory-service');
db.createUser({ user: "root", pwd: "MongoDB2025!", roles: [{ role: "readWrite", db: "inventory-service" }] });

db = db.getSiblingDB('product-service');
db.createUser({ user: "root", pwd: "MongoDB2025!", roles: [{ role: "readWrite", db: "product-service" }] });

db = db.getSiblingDB('customer-service');
db.createUser({ user: "root", pwd: "MongoDB2025!", roles: [{ role: "readWrite", db: "customer-service" }] });
