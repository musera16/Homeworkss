# 1. A Needle in the Haystack
def find_needle(haystack):
    if "needle" in haystack:
        index = haystack.index("needle")
        return f"found the needle at position {index}"
    else:
        return "needle not found in haystack"

# 2. Make Upper Case
def make_upper_case(s):
    return s.upper()

# 3. Sum Arrays
def sum_array(a):
    return sum(a)

# 4. Invert Values
def invert(lst):
    return [-x for x in lst]

# 5. Calculate Average
def find_average(numbers):
    if not numbers:
        return 0
    else:
        return sum(numbers) / len(numbers)

# 6. Are You Playing Banjo?
def are_you_playing_banjo(name):
    if name.lower().startswith("r"):
        return name + " plays banjo"
    else:
        return name + " does not play banjo"
