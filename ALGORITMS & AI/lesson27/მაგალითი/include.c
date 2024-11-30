#include <stdio.h>

void modifyValue(int *ptr) {
    *ptr = 100;  // მონაცემის შეცვლა მაჩვენებლის საშუალებით
}

int main() {
    int x = 10;
    printf("Before: %d\n", x);
    modifyValue(&x);  // &x - მაჩვენებლის გადაცემა
    printf("After: %d\n", x);  // შეცვლილი მნიშვნელობა
    return 0;
}
