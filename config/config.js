CONFIG = {}

CONFIG.port = process.env.PORT || '3000';

CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '27017';

CONFIG.RDS_HOSTNAME = process.env.RDS_HOSTNAME || 'aa1vc3xj4c3k7kv.cwwnavucu4nf.eu-west-1.rds.amazonaws.com';
CONFIG.RDS_USERNAME = process.env.RDS_USERNAME || 'corey';
CONFIG.RDS_PASSWORD = process.env.RDS_PASSWORD || 'xa4e6epm';
CONFIG.RDS_PORT = process.env.RDS_PORT || '3306';