const {connectToDb} = require("./db/db.connect");
connectToDb();
const JobPosting = require("./models/jobPosting.models");

const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => {
    console.log("server running on ", PORT);
});

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

//function to create new jobPost.
const createNewJobPost = async (newJobPost) => {
    try{
        const newJobPostCreated = new JobPosting(newJobPost);
        const savedNewJobPost = await newJobPostCreated.save();
        return savedNewJobPost;
    }
    catch (error) {
        console.log('error occured while creating new jobpost: ', error);
    }
};

app.post("/jobpost/add", async (req, res) => {
    try{
        const newJobPostAdded = await createNewJobPost(req.body);
        if(newJobPostAdded){
            res.status(201).json({message: 'Jobpost added successfully.', data: newJobPostAdded});
        }else{
            res.status(404).json({error: 'Jobpost not found.'});
        }
    }
    catch (error) {
        res.status(500).json({error: 'failed to create new jobpost.'});
    }
});

app.get("/", (req, res) => {
    res.send('hi i am jobpost api');
})

//function to get all jobposts from db.
const readAllJobPosts = async () => {
    try{
        const jobPostsFound = await JobPosting.find();
        return jobPostsFound;    
    }
    catch (error) {
        console.log('error occured while reading all jobposts ', error);
    }
};

app.get("/jobposts/all", async (req, res) => {
    try{
        const allJobPost = await readAllJobPosts();
        if(allJobPost.length > 0){
            res.status(200).json({message: 'all jobposts found.', data: allJobPost});
        }else{
            res.status(404).json({error: 'no jobposts found.'});
        }
    }
    catch (error) {
        res.status(500).json({error: 'failed to fetch jobposts.'});
    }
});

//function to get jobpost by id.
const getJobPostById = async (jobPostId) => {
    try{
        const jobpostFound = await JobPosting.findOne({_id: jobPostId});
        return jobpostFound;    
    }
    catch (error) {
        console.log('error occured while reading jobpost ', error);
    }
};

app.get("/jobpost/id/:jobPostId", async (req, res) => {
    try{
        const jobpostFound = await getJobPostById(req.params.jobPostId);
        if(jobpostFound){
            res.status(200).json({message: 'jobpost found.', data: jobpostFound});
        }else{
            res.status(404).json({error: 'no jobpost found.'});
        }
    }
    catch (error) {
        res.status(500).json({error: 'failed to fetch jobpost.'});
    }
});

//function to delete jobpost by id.
const deleteJobPostById = async (jobpostId) => {
    try{
        const jobpostFound = await JobPosting.findByIdAndDelete(jobpostId, {new: true});
        return jobpostFound;    
    }
    catch (error) {
        console.log('error occured while deleting jobpost ', error);
    }
};

app.delete("/jobpost/delete/:jobpostId", async (req, res) => {
    try{
        const jobpostFound = await deleteJobPostById(req.params.jobpostId);
        if(jobpostFound){
            res.status(200).json({message: 'jobpost deleted successfully', data: jobpostFound});
        }else{
            res.status(404).json({error: 'no jobpost found.'});
        }
    }
    catch (error) {
        res.status(500).json({error: `failed to delete jobpost ${error}`});
    }
});