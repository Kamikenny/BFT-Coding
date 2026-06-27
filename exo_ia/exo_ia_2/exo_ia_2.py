def generateFibonacci(count: int) -> list[int]:
    if count <= 0:
        return []
    if count == 1:
        return [0]

    sequence: list[int] = [0, 1]

    for i in range(2, count):
        next_number: int = sequence[i - 1] + sequence[i - 2]
        sequence.append(next_number)
    
    return sequence

fibonacci20: list[int] = generateFibonacci(20)
print(fibonacci20)
