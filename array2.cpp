#include <iostream>
#include <conio.h>
using namespace std;

//contoh program array dengan data yang bisa diinputkan
int main ()
{
	int a[10];
	char b[10];
	
	cout<<"\Input data array bertipe integer\n";
	for (int i=0;i<5;i++)
	{
		cout<<"Masukkan angka pada array a["<<i<<"] : ";
		cin>>a[i];
	}
	
	cout<<"\nInput data array bertipe karakter\n";
	for (int i=0;i<5;i++)
	{
		cout<<"Masukkan sebuah karakter pada array b["<<i<<"] : ";
		cin>>b[i];
	}
	
	cout<<endl<<endl;
	cout<<"Data array yang berisi data angka\n";
	for (int i=0;i<5;i++)
	{
		cout<<"a["<<i<<"] : "<<a[i];
		cout<<endl;
	}
	
	cout<<endl;
	
	cout<<"Data array yang berisi data karakter\n";
	for (int i=0;i<5;i++)
	{
		cout<<"b["<<i<<"] : "<<b[i];
		cout<<endl;
		
	}
	getch();
	return 0;
}
