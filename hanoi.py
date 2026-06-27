def hanoi_counter(nbr: int) -> int:
    if nbr == 0:
        return 0
    return hanoi_counter(nbr - 1) * 2 + 1

print(hanoi_counter(1)) # 1
print(hanoi_counter(2)) # 3
print(hanoi_counter(3)) # 7
print(hanoi_counter(4)) # 15
print(hanoi_counter(5)) # 31
    
    

    
