using CandidateTracker.Data;
using CandidateTracker.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateTracker : ControllerBase
    {
        private readonly string _connectionString;

        public CandidateTracker(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("add")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            repo.AddCandidate(candidate);
        }

        [HttpGet]
        [Route("pending")]
        public List<Candidate> GetPendingCandidates()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetCandidatesByStatus(Status.Pending);
        }

        [HttpGet]
        [Route("confirmed")]
        public List<Candidate> GetConfirmedCandidates()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetCandidatesByStatus(Status.Confirmed);
        }

        [HttpGet]
        [Route("declined")]
        public List<Candidate> GetDeclinedCandidates()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetCandidatesByStatus(Status.Declined);
        }

        [HttpGet]
        [Route("getbyid")]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetCandidateById(id);
        }

        [HttpPost]
        [Route("updatestatus")]
        public void UpdateStatus(UpdateStatusViewModel vm)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            repo.UpdateStatus(vm.Id, vm.Status);
        }
    }
}
