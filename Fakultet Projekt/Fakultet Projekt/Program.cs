using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Fakultet_Projekt
{
    class Program
    {
        public static List<upis> lista = new List<upis>();
        public static void Main(string[] args)
        {
            Izbornik();
        }

        public static void password()
        {
            string lozinka = "12345";
            Console.WriteLine("Unesite lozinku: ");
            string pass = Console.ReadLine();
            if (lozinka == pass)
            {
                Console.WriteLine("Dobrodošli administrator");
                return;
            }
            else if (lozinka != pass)
            {
                Console.WriteLine("Netočna lozinka,unesite ponovo");
                password();
            }
        }
        public static void Izbornik()
        {
            Console.WriteLine("GLAVNI IZBORNIK");
            Console.WriteLine("Odaberite jednu od opcija:");
            Console.WriteLine("[1] Studenti");
            Console.WriteLine("[2] Upis studenata");
            Console.WriteLine("[3] Azuriranje");
            int unos = int.Parse(Console.ReadLine());
            if (unos == 1)
            {
                Console.WriteLine("[1] Ispis studenata");
                Console.WriteLine("[2] Sortiranje po...");
                int unos1 = int.Parse(Console.ReadLine());
                if (unos1 == 1)
                    ispisStudenata();
                else if (unos1 == 2)
                {
                    Console.WriteLine("Odaberite jednu od opcija sortiranja:");
                    Console.WriteLine("[1] Po imenu");
                    Console.WriteLine("[2] Po smjeru studija");
                    Console.WriteLine("[3] Po godini studija");
                    int unos2 = int.Parse(Console.ReadLine());
                    if (unos2 == 1)
                        sortbyime();
                    else if (unos2 == 2)
                        sortbysmjer();
                    else if (unos2 == 3)
                        sortbygodina();
                }
            }
            else if (unos == 2)
                noviUpis();
            else if (unos == 3)
            {
                Console.WriteLine("[1] Azuriranje studenata");
                Console.WriteLine("[2] Brisanje studenata");
                Console.WriteLine("[3] Izbornik");
                int unos2 = int.Parse(Console.ReadLine());
                if (unos2 == 1)
                {
                    password();
                    azuriranje();
                }
                else if (unos2 == 2)
                {
                    password();
                    brisanjeStudenata();
                }
                else
                {
                    Izbornik();
                }
            }
        }

        public static void noviUpis()
        {
            upis novi = new upis();

            string[] studentUnos = new string[3];

            Console.WriteLine("Unesite ime: ");
            novi.ime = Console.ReadLine();
            studentUnos[0] = novi.ime;

            Console.WriteLine("Unesite smjer: ");
            novi.smjer = Console.ReadLine();
            studentUnos[1] = novi.smjer;

            Console.WriteLine("Unesite godinu: ");
            novi.godina = int.Parse(Console.ReadLine());
            studentUnos[2] = Convert.ToString(novi.godina);

            StreamWriter upis = new StreamWriter($"studenti.txt", true);

            for (int i = 0; i < studentUnos.Length; i++)
            {
                upis.Write(studentUnos[i] + ',');
            }
            upis.WriteLine();
            upis.Close();
            Izbornik();
        }
        public static void ispisStudenata()
        {
            List<string> lines = File.ReadAllLines($"studenti.txt").ToList();
            Console.WriteLine($"Studenti:\n");
            foreach (var line in lines)
            {
                string[] ulazi = line.Split(',');

                Console.WriteLine("Ime i prezime: "+ulazi[0] + ",Studij: " + ulazi[1] + ",Godina: " + ulazi[2]);
            }
            Console.ReadLine();
            Izbornik();
        }
        public static void brisanjeStudenata()
        {
            try
            {
                List<string> remove = File.ReadAllLines($"studenti.txt").ToList();
                Console.WriteLine("Što želite izbrisati?");
                int linija = int.Parse(Console.ReadLine());
                remove.RemoveAt(linija);
                File.WriteAllLines($"studenti.txt", remove.ToArray());
            }
            catch (Exception)
            {
                Console.WriteLine("Ne postoji student sa tim ID-om!!!\n");
                brisanjeStudenata();
            }
            
            
        }
        public static void sortbyime()
        {
            List<string> lista = new List<string>();
            List<upis> lista2 = new List<upis>();
            string path = $"studenti.txt";
            lista = File.ReadAllLines(path).ToList();
            foreach (string line in lista)
            {
                string[] items = line.Split(',');
                upis ime = new upis();
                ime.ime = items[0];
                lista2.Add(ime);
            }
            var imena = lista2.OrderBy(x => x.ime);
            foreach (var a in imena)
            {
                Console.WriteLine(a.ime);
                Console.WriteLine();
            }
            Izbornik();
        }
        public static void sortbysmjer()
        {
            List<string> lista = new List<string>();
            List<upis> lista2 = new List<upis>();
            string path = $"studenti.txt";
            lista = File.ReadAllLines(path).ToList();
            foreach (string line in lista)
            {
                string[] items2 = line.Split(',');
                upis smjer = new upis();
                smjer.smjer = items2[1];
                lista2.Add(smjer);
            }
            var smjerovi = lista2.OrderBy(x => x.smjer);
            foreach (var b in smjerovi)
            {
                Console.WriteLine(b.smjer);
                Console.WriteLine();
            }
            Izbornik();
        }
        public static void sortbygodina()
        {
            var studentiVar = upis.GetStudent();
            var godinaVar = studentiVar.OrderByDescending(x => x.godina);

            foreach (var student in godinaVar)
            {
                Console.WriteLine(student.ime + " " + student.godina + ". godina");
            }
            Console.WriteLine();
            Izbornik();
        }
        public static void azuriranje()
        {
            try
            {
                Console.WriteLine($"Odaberite Studenta\n");

                var studenti = upis.GetStudent();
                var studentiImena = studenti.Select(x => x.ime).ToList();

                for (int i = 0; i < studentiImena.Count; i++)
                {
                    Console.WriteLine($"[{i}] {studentiImena[i]}");
                }

                int index = int.Parse(Console.ReadLine());

                var filtriraniStudent = studenti.Where(x => x.ime == studentiImena[index]).First();

                Console.WriteLine("Novo Ime i prezime");
                studenti[index].ime = Console.ReadLine();
                studenti[index].smjer = Console.ReadLine();
                studenti[index].godina = int.Parse(Console.ReadLine());
                upis.SaveStudent(studenti);
            }
            catch (Exception)
            {
                Console.WriteLine("Taj student ne postoji!");
            }
            Izbornik();
        }
    }
}

