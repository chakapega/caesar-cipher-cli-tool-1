# Caesar Cipher CLI Tool

## OVERVIEW

This is a command-line interface (CLI) tool which encode and decode a text by **[Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool accept four options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

What you should know about tool details:

- Action (encode/decode) and the shift are required. If one of them missed - an error will be shown, the process will exit with non-zero status code.
- If the input file is missed - stdin as an input source is used.
- If the output file is missed - stdout as an output destination is used.
- If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error will be printed in stderr.
- If passed params are fine the output (file or stdout) will contain encoded/decoded content of input (file or stdin).
- For encoding/decoding only the English alphabet is used, all other characters will be kept untouched.

---

## USAGE EXAMPLE

```bash
$ node caesar-cipher-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node caesar-cipher-cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node caesar-cipher-cli --action decode --shift 7 --input decoded.txt --output plain.txt
```

> input.txt  
> `This is secret. Message about "_" symbol!`

> output.txt  
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

## TOOLS USING

**Node.js**, **JavaScript**, **[Pipeline](https://nodejs.org/api/stream.html#stream_stream_pipeline_source_transforms_destination_callback)** and **[Minimist](https://www.npmjs.com/package/minimist)** were used here.

---

### DEVELOPMENT

@ 2020 Diana Ivanova (@melk0sha)

## For development and me

# Критерии оценки заданий

ok 1. в корне репозитория создана папка с произвольным названием (например caesar-cipher-cli, task1 и т.п.), в которой расположены файлы с кодом программы
ok 2. в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению

3. если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются
4. если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0
5. если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0
6. если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin
7. если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout
8. шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются
9. если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст
10. кодовая база не находится в одном файле, а разделена не файлы в соответствии с выполняемымы задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.)
