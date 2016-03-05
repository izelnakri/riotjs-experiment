<page-login>
    <section class="iz-page-container">
        <div class="row">
            <div class="col-sm-6 col-xs-12">
                <h2 class="hidden-xs">Login</h2>
            </div>

            <div class="col-sm-4 col-sm-offset-2 col-xs-12">
                <div class="well">
                    <h4>Login</h4>
                    <hr />
                    <form>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" />
                        </div>

                        <div class="form-group">
                          <label>Password</label>
                          <input type="password" class="form-control" />
                        </div>

                        <div class="row">
                            <div class="col-xs-7">
                                <a href="/forgot-password" class="btn btn-link">Forgot your password?</a>
                            </div>

                            <div class="col-xs-5">
                                <button type="submit" class="btn btn-block btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <script>
        this.on('mount', function () {
            console.log('page-index mounted');
        });
    </script>
</page-login>
