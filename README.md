# Git Repositories Manager

### Technologies 💻🛠:
[![javascript](https://img.shields.io/static/v1?label=&message=Javascript&color=8A8100&style=flat&logo=JavaScript)](https://github.com/LucasLima337)
[![node](https://img.shields.io/static/v1?label=&message=NodeJS&color=094B00&style=flat&logo=node.js)](https://github.com/LucasLima337)

[![insomnia](https://img.shields.io/static/v1?label=&message=Insomnia&color=5849BE&style=flat&logo=Insomnia)](https://github.com/LucasLima337)
[![yarn](https://img.shields.io/static/v1?label=&message=Yarn&color=2C8EFF&style=flat&logo=Yarn)](https://github.com/LucasLima337)


### Features 🔎💡:
**Function**   | **Method** | **URL**
---------    | ------     | -------
List | GET | /repositories
Add | POST | /repositories
Edit | PUT | /repositories/:id
Delete | DELETE | /repositories/:id
Likes | POST | /repositories/:id/like


### Parameters ⚙:
* List:
  * Query Parameter "title";
  * It is able to search for repositories with a specific title.

* Add:
  * Body Parameter "title", "url", "techs";
  * It is able to add a repository with a title, url and their technologies.

* Edit and Delete:
  * Route Parameter "id";
  * It is able to edit or delete a repository by ID.

* Likes:
  * Route Parameter "id";
  * It is able to like a repository by ID.
