
# Plane Travel Site

I created plane travel and reservation site with using Schiphol Flight API.
## Theme

![App Screenshot](https://github.com/muhammetsarican/plane-travel-site/blob/main/client/public/screenshot_2024-09-24-224059.png)
![App Screenshot](https://github.com/muhammetsarican/plane-travel-site/blob/main/client/public/screenshot_2024-09-24-224116.png)


## API Reference

### Flight

#### Get all flights

```http
  GET /flight
```
### User Flight

#### Get all user flights

```http
  GET /user-flight
```

#### Make reservation 

```http
  POST /user-flight/make-reservation/${flight_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `flight_id`      | `string` | **Required**. Id of flight to fetch |

|Body Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. Id of user to fetch |
| `price`      | `string` | **Required**. Price of flight to fetch |

#### Delete reservation 

```http
  DELETE /user-flight/delete-reservation/${flight_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `flight_id`      | `string` | **Required**. Id of flight to fetch |

## 🚀 Run Locally

Clone the project

```bash
  git clone https://github.com/muhammetsarican/plane-travel-site.git
```

Go to the project directory

```bash
  cd plane-travel-site
```

#### ***Firstly: convert all .env.example files to .env files and fill them your own choices.***

Run the app with docker

```bash
  docker-compose up --build
```


#### At last go the 5173 port that shown at the console as same, Congratulations 🎉
## 🖋️ Authors

- [@muhammetsarican](https://www.github.com/muhammetsarican)


## 📨 Feedback

If you have any feedback, please reach out to us from [email](mailto:muhammetsarican@gmail.com).

