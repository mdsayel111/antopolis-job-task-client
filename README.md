---

# SportsEase

## Live Link
https://sports-facility-booking-platform-client.vercel.app/

## Features

- Users can add category and animal.
- users can get category and animal.

## Technology Stack
- Next.js.
- MUI.
- Tailwind.
- React-Hook-Form
- Tanstack Query

## Installation Guideline

- Clone git repository.
- Then follow installation steps bellow.

### Installation Steps

- run following command line by line:
```bash
$ npm install
$ npm run dev
```

### Prerequisites

- Node.js
### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    NEXT_PUBLIC_BASE_URL=Your_Base_Url
   ```

## Usage
- Clone server and client git repo .
```
client : https://github.com/mdsayel111/sports_facility_booking_platform_client
server: https://github.com/mdsayel111/sports_facility_booking_platform_client
```
- run install command . 
```
$ npm install
```
- Add .env file:
   - client:
    ```
    VITE_IMGBB_API_KEY=Your_ImgBB_Api_Key
    VITE_BASE_UR=http://localhost:5000/api
    ```
    - server:
    ```
    PORT=5000
    DB_URL=Your_DB_Url
    ORIGINS=["CORS_Urls"]
    ```
- Then run following command for both (client and server) for run locally:
```
$ npm run dev
```