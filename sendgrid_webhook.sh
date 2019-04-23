function localtunnel {
    lt -s m0FnD3Ve4ZhQ2PffRk4mXHOlDi2N0a --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done