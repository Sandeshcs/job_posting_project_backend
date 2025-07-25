# INTERN HOUSE

A job post creation app which includes form to create job post, display all job posts, see full details of job post, delete job post and search any job post.

Built with React.js frontend, Express.js/Node.js backend, MongoDB database.

---
## App Demo Link

[App Live Demo](https://job-posting-project-frontend.vercel.app/)

---

## Qucik Start

```
git clone https://github.com/Sandeshcs/job_posting_project_backend.git
cd job_posting_project_backend
npm install
npm start
```

---

## Technologies
- React.js
- React Router
- Node.js
- Express.js
- MongoDB
- Bootstarp

---

## App Demo Video
Watch a walkthrough ( 6 minutes ) of all the major features of this app:
[App Demo Video](https://drive.google.com/file/d/1gjXpvY1yHBz5TRlzRGs7zJdFSpKb581w/view?usp=sharing)

---

## API Reference
### Job Post Api
#### POST /api/jobpost/add
Creates new job post
- Status 201 for creating new job post successfully.
- Status 404 job post not found.
- Status 500 for internal server error.

Sample Resopnse:
```
{_id, job name, company name, location, salary, job type, job decription, job qualification}
```

#### GET /api/jobposts/all
Display all job posts fields include (job name, company name, location, salary, job type, job decription, job qualification).
- Status 200 ok for fetching all job posts.
- Status 404 not found if no job posts are present.
- Status 500 for internal server error.

Sample Resopnse:
```
[{_id, job name, company name, location, salary, job type, job decription, job qualification}, ...]
```

#### GET /api/jobposts/id/:jobPostId
Display a specific job post inlcudes (job name, company name, location, salary, job type, job decription, job qualification).
- Status 200 ok for fetching one job post.
- Status 404 not found if no job post are present.
- Status 500 for internal server error.

Sample Resopnse:
```
{_id, job name, company name, location, salary, job type, job decription, job qualification}
```

#### DELETE /api/jobpost/delete/:jobpostId
Deletes a job post which we ask for.
- Status 200 ok for deleting one job post.
- Status 404 not found if no job post are present.
- Status 500 for internal server error.

Sample Response:

```
{_id, job name, company name, location, salary, job type, job decription, job qualification}
```

## Contact
For bugs or feature request please reach out to sandeshcs2921@gmail.com.