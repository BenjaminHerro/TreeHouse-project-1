import re

directory  = 'C:\\Users\\ben.herro\\Coding\\TreeHouse\\Projects\\TreeHouse-project-1\\quotes.txt'

with open(directory,'r') as d:
    d = [i.strip() for i in d.readlines()]

quotes = d[::2]
sources_raw = d[1::2]
sources = []
years = []
citations = []

for i in sources_raw:
    years.append(re.findall(r'\(.*?\)', i))
    citations.append(re.findall(r"&[\w\s',-\.?;!+:#]*&", i))
    sources.append(re.findall(r'-.+?,', i))

for i in citations:
    if i != []:
        i[0] = re.sub(r'[&]','',i[0])

for i in sources:
    i[0] = re.sub(r'[-]\s','',i[0])
    i[0] = re.sub(r'[,]','',i[0])

def create_jsobj_file():
    json_file = 'var quotes = [\n'
    for i in range(len(quotes)):
        json_file += '\t\t{\n\t\t\tquote:'
        json_file += quotes[i] + ',\n'
        json_file += '\t\t\tsource:'
        json_file += '"' + sources[i][0] + '"' + ',\n'
        if years[i] != []:
            json_file += '\t\t\tyear:'
            json_file += '"' + years[i][0] + '"' + ',\n'
        else:
            json_file += '\t\t\tyear:'
            json_file += '"None"' + ',\n'
        if i != len(quotes) - 1:
            if citations[i] != []:
                json_file += '\t\t\tcitation:'
                json_file += '"' + citations[i][0] + '"' + '\n\t\t},\n'
            else:
                json_file += '\t\t\tcitation:'
                json_file += '"None"' + '\n\t\t},\n'
        else:
            if citations[i] != []:
                json_file += '\t\t\tcitation:'
                json_file += '"' + citations[i][0] + '"' + '\n\t\t},\n'
            else:
                json_file += '\t\t\tcitation:'
                json_file += '"None"' + '\n\t\t}\n'
    json_file += ']'
    return json_file

with open('quotes_obj.js','w') as jout:
    print(create_jsobj_file(), file=jout)
