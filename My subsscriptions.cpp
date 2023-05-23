#include <iostream>
using namespace std;
int main()
{
    float toi, hindu, et, bm, ht;
    toi = 27;
    hindu = 18;
    et = 34;
    bm = 10.5;
    ht = 18;
    float arr[5] = {toi, hindu, et, bm, ht};
    int input;
    cin >> input;
    for (int i = 0; i < 5; i++)
    {
        for (int j = i + 1; j < 5; j++)
        {
            if (arr[i] + arr[j] <= input)
            {
                switch (i)
                {
                case 0:
                    cout << "{\"TOI\", ";
                    break;

                case 1:
                    cout << "{\"Hindu\", ";
                    break;

                case 2:
                    cout << "{\"ET\", ";
                    break;

                case 3:
                    cout << "{\"BM\", ";
                    break;

                case 4:
                    cout << "{\"HT\", ";
                    break;
                }
                switch (j)
                {
                case 0:
                    cout << "\"TOI\"}, ";
                    break;

                case 1:
                    cout << "\"Hindu\"}, ";
                    break;

                case 2:
                    cout << "\"ET\"}, ";
                    break;

                case 3:
                    cout << "\"BM\"}, ";
                    break;

                case 4:
                    cout << "\"HT\"}, ";
                    break;
                }
            }
        }
    }
    return 0;
}