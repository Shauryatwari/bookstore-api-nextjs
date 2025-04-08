RESTful API using NestJS

- Node.js 18+
- Docker + Docker Compose
- PostgreSQL (if running locally)

1. Clone the repository:
```bash
git clone https://github.com/Shauryatwari/bookstore-api.git
cd bookstore-api
docker-compose up

API will be available at:
http://localhost:3000

Run Locally (without Docker)
npm install
npm run start:dev

Access API documentation at:
http://localhost:3000/api

npm run test
#returns: 
#Test Suites: 1 failed, 6 passed, 7 total
#Tests:       1 failed, 6 passed, 7 total
#Snapshots:   0 total
#Time:        20.905 s, estimated 22 s
#Ran all test suites. i do not know why that 1 test case cant be passed i cannot figure it out