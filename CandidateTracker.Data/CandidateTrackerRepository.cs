using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
    public class CandidateTrackerRepository
    {
        private readonly string _connectionString;

        public CandidateTrackerRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            using var  context = new CandidateTrackerDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public List<Candidate> GetCandidatesByStatus(Status status)
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).ToList();
        }

        public Candidate GetCandidateById(int id)
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public void UpdateStatus(int id, Status status)
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"UPDATE Candidates SET Status = {status} WHERE Id = {id}");
        }
    }
}
