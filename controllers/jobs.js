const getAllJobs = async (req, res) => {
  console.log('getAllJobs')
}

const getJob = async (req, res) => {
  console.log('getJob')
}

const createJob = async (req, res) => {
  console.log('createJob')
}

const updateJob = async (req, res) => {
  console.log('updateJob')
}

const deleteJob = async (req, res) => {
  console.log('deleteJob')
}

module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
}
