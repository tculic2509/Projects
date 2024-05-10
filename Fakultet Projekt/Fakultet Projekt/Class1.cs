using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Fakultet_Projekt
{
    public class upis
    {
        public string ime { get;set; }
        public string smjer { get; set; }
        public int godina { get; set; }
        public override string ToString()
        {
            return ime + smjer + godina;
        }

        public static List<upis> GetStudent()
        {
            string path = $"studenti.txt";
            using StreamReader reader = new StreamReader(path);

            List<upis> student = new();

            string line;
            while ((line = reader.ReadLine()) != null)
            {
                string[] nova = line.Split(',');

                upis st = new()
                {
                    ime = nova[0],
                    smjer = nova[1],
                    godina = int.Parse(nova[2]),

                };

                student.Add(st);
            }

            return student;
        }
        public static void SaveStudent(List<upis> azuriranje)
        {
            string path = $"studenti.txt";
            File.WriteAllText(path, string.Empty);

            using StreamWriter sw = File.AppendText(path);

            foreach (var student in azuriranje)
            {
                sw.WriteLine($"{student.ime},{student.smjer},{student.godina}");

            }
            sw.Close();
        }
    }
    
}
